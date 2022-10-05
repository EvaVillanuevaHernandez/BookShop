package com.eva.books.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eva.books.entity.dao.IBookDao;
import com.eva.books.entity.models.Book;

@Service
public class BookServiceImpl implements IBookService {
	
	@Autowired	
	private IBookDao bookDao;
	
	@Override
	public Book get(long id) {
		return bookDao.findById(id).get();
	}
	
	@Override
	public List<Book> getAll() {
		return (List<Book>)bookDao.findAll();
	}
	
	@Override
	public void post ( Book book ) {
	    bookDao.save(book);
	}
	@Override
	public void put ( Book book , long id ) {
	   bookDao.findById(id).ifPresent((x)->{
		   book.setId(id);
		   bookDao.save(book);
	   });
	}
	@Override
	public void delete ( long id ) {
		bookDao.deleteById(id);
	}
	    

}
