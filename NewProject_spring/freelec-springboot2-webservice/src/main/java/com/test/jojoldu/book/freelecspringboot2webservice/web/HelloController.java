import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
RestController;

@RestController // 컨트롤러를 JSON을 반환하는 컨트롤러로 만들어 줌
public class HelloController{

  @GetMapping("/Hello") // HTTP Method인 Get의 요청을 받을 수 있는 API를 만들어 줌
  public String hello(){
    return "hello";
  }
}

// 예전에는 @RequestMapping(method = RequestMethod.GET)으로 사용되었었음.
// 이제 이 프로젝트는 /hello로 요청이 오면 문자열 hello를 반환하는 기능을 가짐

