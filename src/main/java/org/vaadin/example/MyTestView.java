package org.vaadin.example;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.router.Route;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * A Designer generated component for the my-view template.
 *
 * Designer will add and remove fields with @Id mappings but
 * does not overwrite or otherwise change this file.
 */
@Tag("my-test-view")
@JsModule("./views/my-test-view.ts")
@Route("my-test-view")
public class MyTestView extends LitTemplate {
	private static final long serialVersionUID = 1541345752534474551L;
	private final static Log log = LogFactory.getLog(MyTestView.class);
	

}
