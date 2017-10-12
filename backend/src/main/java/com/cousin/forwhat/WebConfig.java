package com.cousin.forwhat;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by lmchuc on 6/2/2017.
 */
@Configuration
@EnableWebMvc
@EntityScan(basePackages = "com/cousin")
public class WebConfig extends WebMvcConfigurerAdapter {

    private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
//            "classpath:/META-INF/resources/",
//            "classpath:/resources/",
            "classpath:/static/",
            "classpath:/public/",
    };

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").
                addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);
//        Add resources for images
        registry.addResourceHandler("/images/**")
                .addResourceLocations("file:///"+System.getProperty("user.home")+"/Library/images/");
    }
}
