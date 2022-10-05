package com.eva.books.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.eva.books.entity.models.Book;

public interface IBookDao extends CrudRepository<Book, Long> {

}
