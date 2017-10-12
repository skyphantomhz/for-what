package com.cousin.forwhat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoutesController {
    @GetMapping(value = {"/", "/book","/404"})

    public String indexPage() {
        return "index";
    }

}
