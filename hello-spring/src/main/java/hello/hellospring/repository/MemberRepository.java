package hello.hellospring.repository;

import hello.hellospring.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {

    Member save(Member member);
    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);
    List<Member> findAll();
 
    // repo에 4가지 기능을 만듬
    // save : 회원이 저장소에 저장이 됨
    // 그 다음부터 이 저장소에서 findById나 findByName으로 찾아올 수 있음
    // findAll로 지금까지 저장된 회원의 모든 정보를 List형식으로 받아올 수 있음


}
