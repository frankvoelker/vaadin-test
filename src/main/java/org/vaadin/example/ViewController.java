package org.vaadin.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/spring-view")
    public String showSpringView() {
        return "my";
    }
}
