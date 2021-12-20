package com.newbie.springboot.web.dto;

import com.newbie.springboot.domain.posts.Posts;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PostsListResponseDto {
        private Long id;
        private String title;
        private String content;
        private LocalDateTime modifiedDate;

        public PostsListResponseDto(Posts entity){
            this.id = entity.getId();
            this.title = entity.getTitle();
            this.content = entity.getContent();
            this.modifiedDate = entity.getModifiedDate();
        }

}
