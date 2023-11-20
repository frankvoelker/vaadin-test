package org.vaadin.example;

import com.vaadin.flow.component.WebComponentExporter;
import com.vaadin.flow.component.webcomponent.WebComponent;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class MyViewExporter extends WebComponentExporter<MyTestView> {
	private static final long serialVersionUID = 123691612629750930L;
	private final static Log log = LogFactory.getLog(MyViewExporter.class);

	public MyViewExporter() {
		super("my-test");
	}

	@Override
	protected void configureInstance(WebComponent<MyTestView> webComponent, MyTestView component) {
	}
}
