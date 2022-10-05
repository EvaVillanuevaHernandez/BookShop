package com.eva.books.controllers;

import java.sql.SQLException;

import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class ExceptionHandling {

	@ResponseStatus(value=HttpStatus.CONFLICT,
            reason="Data integrity violation") 
	
	@ExceptionHandler({SQLException.class,DataAccessException.class})
	  public String databaseError() {
	    return "databaseError";
	  }
}
