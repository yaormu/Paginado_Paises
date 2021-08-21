package com.example.paisespaginacion.service;

import com.example.paisespaginacion.entity.Pais;
import com.example.paisespaginacion.repository.PaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;


@Service
@Transactional
public class PaisService {

    @Autowired
    PaisRepository paisRepository;

    public Page<Pais> paginas(PageRequest pageable) {
        return paisRepository.findAll(pageable);
    }
}