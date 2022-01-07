package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.springframework.stereotype.Repository;

import java.util.*;

public class MemoryMemberRepository implements MemberRepository{

    private static Map<Long, Member> store = new HashMap<>();
    private static long sequence = 0L;
    //sequence : key값을 0,1,2, ... 이렇게 생성해주는 역할

    @Override
    public Member save(Member member) {
        member.setId(++sequence); // sequence값을 하나씩 올려줌
        store.put(member.getId(), member);
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        return Optional.ofNullable(store.get(id));
        // Optional.ofNullable()로 감싸주면 null값이 반환돼도 client측에서 조정 가능
    }

    @Override
    public Optional<Member> findByName(String name) {
        return store.values().stream()
                .filter(member -> member.getName().equals(name))
                .findAny();
                // java lambda 사용 (돌면서 찾음)
                // member에서 넘어온 값 중에 getName으로 이름이 같은 것을 찾으면 반환
    }

    @Override
    public List<Member> findAll() {
        return new ArrayList<>(store.values());
    }

    public void clearStore(){
        store.clear();
    }


}
