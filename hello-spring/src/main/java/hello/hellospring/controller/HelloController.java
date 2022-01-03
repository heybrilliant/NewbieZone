package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @GetMapping("hello")
    public String hello(Model model){
        model.addAttribute("data", "hello!!!");
        return "hello";
    }

    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam("name") String name, Model model){ // requestparam으로 받아온 name값을 model로 던져줘야함
        model.addAttribute("name",name); // key, name
        return "hello-template";
    }

    @GetMapping("Hello-string")
    @ResponseBody // @ResponseBody : HTTP에서 바디부에 return하는 데이터를 직접 넣어주겠다는 뜻
    public String helloString(@RequestParam("name") String name){
        return "Hello ! "+ name;
    }

    @GetMapping("Hello-api")
    @ResponseBody
    public Hello helloApi(@RequestParam("name") String name){
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
    }

    static class Hello{
        private String name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
