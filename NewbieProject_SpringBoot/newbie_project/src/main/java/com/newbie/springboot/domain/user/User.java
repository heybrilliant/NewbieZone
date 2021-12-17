package com.newbie.springboot.domain.user;

import com.newbie.springboot.domain.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Getter
@NoArgsConstructor
@Entity
public class User extends BaseTimeEntity {

    private Long id;

    private String name;
}
