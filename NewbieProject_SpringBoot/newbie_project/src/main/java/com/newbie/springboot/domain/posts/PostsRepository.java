package com.newbie.springboot.domain.posts;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostsRepository extends JpaRepository<Posts, Long> {
    // iBatis에서의 Dao 역할 : DB Layer 접근자
    // 인터페이스 생성 후 JpaRepository<Entity 클래스, PK 타입>을 상속하면 기본적인 CRUD 메소드가 자동으로 생성됨
    // @Repository 필요 없음
    // Entity클래스와 기본 Entity Repository는 함께 위치해야함
}
