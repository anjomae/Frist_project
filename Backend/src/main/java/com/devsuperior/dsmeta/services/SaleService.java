package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.sale;
import com.devsuperior.dsmeta.repositories.SaleRepositories;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepositories repositories;
	
	public List<sale> findSales() {
		return repositories.findAll();
		}

}
