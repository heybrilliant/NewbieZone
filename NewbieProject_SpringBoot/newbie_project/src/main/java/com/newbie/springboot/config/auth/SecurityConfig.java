package com.newbie.springboot.config.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

    private final CustomOAuth2UserService customOAuth2UserService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .headers().frameOptions().disable()
                .and()
                    .authorizeRequests()
                    .antMatchers("/","/css/**","/images/**","/js/**","/h2-console/**").permitAll()
                    .antMatchers("/api/v1/**").hasRole(Role.USER.name())
                    // andMatchers = 권한 관리 대상을 지정하는 옵션
                    // "/"등 지정된 URL들은 permitAll() 옵션을 적용해 전체열람 권한을 줌
                    // "/api/v1/**"주소를 가진 API는 USER 권한을 가진 사람만 가능하도록 함
                    .anyRequest().authenticated()
                .and()
                    .logout()
                        .logoutSuccessUrl("/") // 로그아웃 설정의 진입점
                .and()
                    .oauth2Login()
                        .userInfoEndpoint()
                            .userService(customOAuth2UserService);
    }
}
