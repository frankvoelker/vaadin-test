import { LitElement, html, css, customElement } from 'lit-element';

@customElement('my-leis-view')
export class MyView extends LitElement {
  static get styles() {
    return css`
      :host {
          display: block;
          height: 100%;
      }
      `;
  }

  render() {
    return html`<vaadin-vertical-layout spacing="false" margin="false">
   <vaadin-vertical-layout class="filterStyle" margin="false" id="root">
    <vaadin-vertical-layout spacing style="width: 100%" id="filters">
     <row>
      <column expand="0.15">
       <span plain-text id="nextLabel" :bottom>
         Next Renewal Date 
       </span>
      </column>
      <column expand="0.1">
       <vaadin-date-picker label="From" id="nextFrom"></vaadin-date-picker>
      </column>
      <column expand="0.75">
       <vaadin-date-picker label="Until" id="nextUntil"></vaadin-date-picker>
      </column>
     </row>
     <row>
      <column>
       <span plain-text id="initialLabel" :bottom>
         Initial Registration Date 
       </span>
      </column>
      <column>
       <vaadin-date-picker label="From" id="initialFrom"></vaadin-date-picker>
      </column>
      <column>
       <vaadin-date-picker label="Until" id="initialUntil"></vaadin-date-picker>
      </column>
     </row>
     <row>
      <column>
       <span plain-text id="multiLabel" :bottom>
         Multi Year End Date 
       </span>
      </column>
      <column>
       <vaadin-date-picker label="From" id="multiFrom"></vaadin-date-picker>
      </column>
      <column>
       <vaadin-date-picker label="Until" id="multiUntil"></vaadin-date-picker>
      </column>
     </row>
     <row>
      <column>
       <span plain-text id="renewalLabel" :bottom>
         Renewal 
       </span>
      </column>
      <column>
       <vaadin-combo-box data-item-type="java.lang.String" id="renewal">
        <option item="Option1">Any</option>
        <option item="Option2">Automatic</option>
        <option item="Option3">Manual</option>
       </vaadin-combo-box>
      </column>
     </row>
     <row>
      <column>
       <span plain-text id="regStatusLabel" :bottom>
         Registration Status 
       </span>
      </column>
      <column colspan="2">
       <vaadin-horizontal-layout class="checkboxContainer" style="width: 100%" height="35px" id="regStatusContainer"></vaadin-horizontal-layout>
      </column>
     </row>
     <row>
      <column>
       <span plain-text id="procStatusLabel" :bottom>
         Processing Status 
       </span>
      </column>
      <column colspan="2">
       <vaadin-horizontal-layout class="checkboxContainer" style="width: 100%" height="35px" id="procStatusContainer"></vaadin-horizontal-layout>
      </column>
     </row>
    </vaadin-vertical-layout>
    <vaadin-horizontal-layout style="width: 100%" id="searchBar">
     <vaadin-text-field placeholder="Unternehmen, LEI, Registernummer" style="width: 100%" id="searchField" :expand></vaadin-text-field>
     <span plain-text id="searchLabel"></span>
     <vaadin-button plain-text id="searchButton">
       Suchen 
     </vaadin-button>
     <vaadin-button plain-text id="filterButton" :right>
       Filter anzeigen 
     </vaadin-button>
    </vaadin-horizontal-layout>
    <vaadin-grid style="width: 100%" id="grid">
     <table>
      <colgroup>
       <col column-id="project" sortable="false">
       <col column-id="status" sortable="false">
      </colgroup>
      <thead>
       <tr default>
        <th plain-text column-ids="project">Project</th>
        <th plain-text column-ids="status">Status</th>
       </tr>
      </thead>
      <tbody>
       <tr item="project1">
        <td>Customer Project 1</td>
        <td>OK</td>
       </tr>
       <tr item="project2">
        <td>Customer Project 2</td>
        <td>OK</td>
       </tr>
       <tr item="project3">
        <td>Customer Project 3</td>
        <td>OK</td>
       </tr>
       <tr item="project4">
        <td>Customer Project 4</td>
        <td>OK</td>
       </tr>
       <tr item="project5">
        <td>Customer Project 5</td>
        <td>OK</td>
       </tr>
       <tr item="project6">
        <td>Customer Project 6</td>
        <td>OK</td>
       </tr>
       <tr item="project7">
        <td>Customer Project 7</td>
        <td>OK</td>
       </tr>
       <tr item="project8">
        <td>Customer Project 8</td>
        <td>OK</td>
       </tr>
       <tr item="project9">
        <td>Customer Project 9</td>
        <td>OK</td>
       </tr>
      </tbody>
     </table>
    </vaadin-grid>
   </vaadin-vertical-layout>
   <vaadin-vertical-layout spacing="false" margin="false" id="optional">
    <span visible="false" plain-text id="label">
      Label 
    </span>
    <vaadin-button visible="false" plain-text id="backButton">
      Button 
    </vaadin-button>
    <vaadin-vertical-layout spacing="false" margin="false" id="optionalContent"></vaadin-vertical-layout>
   </vaadin-vertical-layout>
   <vaadin-horizontal-layout class="update-buttons" id="buttons"></vaadin-horizontal-layout>
  </vaadin-vertical-layout>
`;
  }

  // Remove this method to render the contents of this view inside Shadow DOM
  createRenderRoot() {
    return this;
  }
}
