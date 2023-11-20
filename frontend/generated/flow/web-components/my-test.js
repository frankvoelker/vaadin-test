import {applyTheme} from 'Frontend/generated/theme.js';

class MyTest extends HTMLElement {
  constructor() {
    super();
    this._propertyUpdatedFromServer = {};
    this.$ = {};
    this.initDefaults();
    var shadow = this.attachShadow({ mode: "open" });
    var style = document.createElement("style");
    style.innerHTML = `
      :host {
        position: relative;
        display: inline-block;
      }
    `;
    applyTheme(shadow);
    shadow.appendChild(style);

    var self = this;
    /* Set initial property values from attributes */
    this.getAttributeNames().forEach(function(attr) {
      self.attributeChange(attr, self.getAttribute(attr));
    });
    /* Observe later attribute changes */
    new MutationObserver(function(mutations) {
      self.attributeObserve(mutations);
    }).observe(this, {
      attributes: true
    });
  }

  attributeObserve(mutationList) {
    var self = this;
    mutationList
      .filter(mutation => mutation.type == "attributes")
      .forEach(function(mutation) {
        var attributeName = mutation.attributeName;
        var value = mutation.target.getAttribute(attributeName);
        self.attributeChange(attributeName, value);
      });
  }

  attributeChange(attribute, value) {
     
  }

  ;

  initDefaults() {
    ;
  }

  _sync(property, newValue) {
    // Don't sync, if the web component has not been registered yet
    if (this.$server && document.body.$[this.$.id] === this) {
      if (!this._propertyUpdatedFromServer[property]) {
        this.$server.sync(property, newValue);
      } else {
        this._propertyUpdatedFromServer[property] = false;
      }
    }
  }

  _updatePropertyFromServer(property, newValue) {
    if (this.__proto__.hasOwnProperty(property)) {
      this._propertyUpdatedFromServer[property] = true;
      this[property] = newValue;
    }
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }

    this._connect();
  }

  _connect(){
      if (!this.$.id) {
        this._registerElement();
      } else {
        console.debug('reconnecting',this,'using id',this.$.id);
        this.$server.reconnect();
      }
  }

  _registerElement() {
    this.$.id = "MyTest-" + MyTest.id++;
    console.debug('registering',this,'using id',this.$.id);

    // Needed to make Flow do lookup correctly
    const poller = () => {
      var flowClient = this._getClient();
      if (flowClient && flowClient.connectWebComponent) {
        document.body.$ = document.body.$ || {};
        document.body.$[this.$.id] = this;
        const properties = {};
        for (var prop in MyTest.properties) {
          if (prop === "_propertyUpdatedFromServer") {
            continue;
          }
          properties[prop] = this[prop];
        }
        flowClient.connectWebComponent({tag: 'my-test', id: this.$.id,
            userAssignedId: this.id, attributeValues:
            {}});
      } else {
        setTimeout(poller, 10);
      }
    };

    poller();
  }
  _getClient() {
    if (MyTest._getClientStrategy){
        return MyTest._getClientStrategy(this);
    }
    var clients = MyTest._getClients();
    if (!clients){
        return undefined;
    }

    return Object.values(clients).find(client => client.exportedWebComponents && client.exportedWebComponents.indexOf('my-test') != -1)
  }
  disconnectedCallback() {
    this.$server.disconnected();

    console.debug("disconnected", this);
  }

  serverConnected() {
  }

  /**
   * Converts a string to a typed JavaScript value.
   *
   * Borrowed from Polymer.
   *
   * This method is called when reading HTML attribute values to
   * JS properties.
   */
  _deserializeValue(value, type) {
    var outValue;
    switch (type) {
      case Object:
        try {
          outValue = JSON.parse(value);
        } catch (x) {
          // allow non-JSON literals like Strings and Numbers
          outValue = value;
        }
        break;
      case Array:
        try {
          outValue = JSON.parse(value);
        } catch (x) {
          outValue = null;
          console.warn(
            `Unable to decode Array as JSON: ${value}`
          );
        }
        break;
      case Date:
        outValue = isNaN(value) ? String(value) : Number(value);
        outValue = new Date(outValue);
        break;
      case Boolean:
        outValue = value !== null;
        break;
      case Number:
        outValue = Number(value);
        break;
      default:
        outValue = value;
        break;
    }
    return outValue;
  }
}

MyTest.id = 0;

MyTest._getClients = function(){
    if (!window.Vaadin || !window.Vaadin.Flow || !window.Vaadin.Flow.clients) {
        return undefined;
    }
    return window.Vaadin.Flow.clients;
}

customElements.define('my-test', MyTest);

