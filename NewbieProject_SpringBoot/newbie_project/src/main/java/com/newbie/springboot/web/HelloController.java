package com.newbie.springboot.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello") // 컨트롤러를 JSON으로 반환하는 컨트롤러로 생성
    public String hello() {
        return "hello";
    }
}
