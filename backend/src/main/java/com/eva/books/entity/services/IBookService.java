package com.eva.books.entity.services;

import com.eva.books.entity.models.Book;

import java.util.List;

public interface IBookService {
public Book get (long id);
public List <Book>getAll();
public void post(Book information);
public void put(Book information,long id);
public void delete(long id);
}
