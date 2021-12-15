package com.newbie.springboot.web;

import com.newbie.springboot.service.PostsService;
import com.newbie.springboot.web.dto.PostsResponseDto;
import com.newbie.springboot.web.dto.PostsSaveRequestDto;
import com.newbie.springboot.web.dto.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class PostsApiController {

    private final PostsService postsService;

    @PostMapping("/api/v1/posts")
    public Long save(@RequestBody PostsSaveRequestDto requestDto){
        return postsService.save(requestDto);
    }

    @PutMapping("/api/v1/posts/{id}")
    public Long update(@PathVariable Long id, @RequestBody PostsUpdateRequestDto requestDto){
        return postsService.update(id, requestDto);
    }

    @GetMapping("/api/v1/posts/{id}")
    public PostsResponseDto findId(@PathVariable Long id){
        return postsService.findById(id);
    }
}
