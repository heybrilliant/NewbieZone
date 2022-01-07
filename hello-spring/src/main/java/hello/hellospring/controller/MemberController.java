package hello.hellospring.controller;

import hello.hellospring.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class MemberController {

    private final MemberService memberService;
    // 연결은 new로 말고 생성자로 생성

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
}
