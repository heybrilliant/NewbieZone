package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;

class MemoryMemberRepositoryTest {
    // 다른 곳에서 가져다 쓸 것이 아니니 굳이 public으로 선언해 줄 필요가 없음

    MemoryMemberRepository repository = new MemoryMemberRepository();

    @AfterEach
    public void afterEach(){
        // 일종의 callback 함수
        // 한 test가 끝날 때마다 실행됨

        repository.clearStore();
        // test 하나 실행-> 종료 후 repository를 지움
    }

    @Test
    public void save(){
        Member member = new Member();
        member.setName("spring"); // 이름을 세팅

        repository.save(member); // repository에 member를 저장

        Member result = repository.findById(member.getId()).get(); // 검증 -> Optional에서 값을 꺼낼 때는 get()으로 꺼냄
        Assertions.assertThat(member).isEqualTo(result);
    }

    @Test
    public void findByName(){
        Member member1 = new Member();
        member1.setName("spring1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("spring2");
        repository.save(member2);

        Member result =  repository.findByName("spring1").get();

        Assertions.assertThat(result).isEqualTo(member1);
    }

    @Test
    public void findAll(){
        Member member1 = new Member();
        member1.setName("spring1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("spring2");
        repository.save(member2);

        List<Member> result = repository.findAll();

        Assertions.assertThat(result.size()).isEqualTo(2);

    }

}
