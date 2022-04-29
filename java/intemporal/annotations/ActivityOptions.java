package intemporal.annotations;

import clojure.lang.Keyword;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target(value={METHOD})
@Retention(value=RUNTIME)
public @interface ActivityOptions {

    boolean retry() default false;
}