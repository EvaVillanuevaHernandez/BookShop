package com.eva.books.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eva.books.entity.models.Book;
import com.eva.books.entity.services.IBookService;


@RestController	
@CrossOrigin(origins ="*")
public class BookController {
	
@Autowired
IBookService bookService;

@GetMapping("/books")
public List<Book>getAllBooks(){
	return bookService.getAll();
}

@GetMapping("/books/{id}")
public Book getOne(@PathVariable(value = "id")long id){
	return bookService.get(id);
}


@PostMapping("/books")
public void post (Book book) { 
	bookService.post(book);
}


@PutMapping("/books/{id}")
public void put(Book book,@PathVariable(value="id")long id) {
	bookService.put(book, id);
}

@DeleteMapping("/books/{id}")
public void delete(@PathVariable(value="id")long id) {
	bookService.delete(id);
}

}
