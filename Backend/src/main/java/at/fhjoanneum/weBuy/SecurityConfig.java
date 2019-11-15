package at.fhjoanneum.weBuy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity // Enable security config. This annotation denotes config for spring security.
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
    // @Autowired
    // private JwtConfig jwtConfig;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        // // make sure we use stateless session; session won't be used to store user's
        // state.
        // .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        // .and()
        // // handle an authorized attempts
        // .exceptionHandling().authenticationEntryPoint((req, rsp, e) ->
        // rsp.sendError(HttpServletResponse.SC_UNAUTHORIZED))
        // .and()
        // // Add a filter to validate user credentials and add token in the response
        // header

        // // What's the authenticationManager()?
        // // An object provided by WebSecurityConfigurerAdapter, used to authenticate
        // the user passing user's credentials
        // // The filter needs this auth manager to authenticate the user.
        // .addFilter(new
        // JwtUsernameAndPasswordAuthenticationFilter(authenticationManager(),
        // jwtConfig))
        // .addFilterAfter(new JwtTokenAuthenticationFilter(jwtConfig),
        // UsernamePasswordAuthenticationFilter.class)
        // .authorizeRequests()
        // // allow all POST requests
        // .antMatchers(HttpMethod.POST, jwtConfig.getUri()).permitAll()
        // .antMatchers(HttpMethod.GET, "/bands").permitAll()
        // .antMatchers(HttpMethod.GET, "/countries").permitAll()
        // .antMatchers(HttpMethod.GET, "/events").permitAll()
        // .antMatchers(HttpMethod.GET, "/dto/albums/**").permitAll()
        // .antMatchers(HttpMethod.GET, "/dto/bands/**").permitAll()
        // .antMatchers(HttpMethod.GET, "/bands/**/members").permitAll()
        // .antMatchers(HttpMethod.GET, "/bands/**/events").permitAll()
        // .antMatchers(HttpMethod.GET, "/bands/**/albums").permitAll()
        // .antMatchers(HttpMethod.GET, "/dto/countries/**").permitAll()
        // .antMatchers(HttpMethod.GET, "/dto/songs/**").permitAll()
        // .antMatchers(HttpMethod.GET, "/dto/countrieswithbands").permitAll()
        // .antMatchers(HttpMethod.GET, "/dto/countrieswithevents").permitAll()
        // .antMatchers(HttpMethod.GET, "/dto/countrieswithbandsandevents").permitAll()
        // // must be an admin if trying to access admin area (authentication is also
        // required here)
        // .antMatchers("/admin/**").hasRole("ADMIN")
        // // any other requests must be authenticated
        // .anyRequest().authenticated();

    }

    // Spring has UserDetailsService interface, which can be overriden to provide
    // our implementation for fetching user from database (or any other source).
    // The UserDetailsService object is used by the auth manager to load the user
    // from database.
    // In addition, we need to define the password encoder also. So, auth manager
    // can compare and verify passwords.
    // @Bean
    // public AuthenticationManager customAuthenticationManager() throws Exception {
    // return authenticationManager();
    // }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
    }

    // @Bean
    // public JwtConfig jwtConfig() {
    // return new JwtConfig();
    // }

}