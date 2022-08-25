const express = require("express");
const router = express.Router();
const {inmuebleShema}=require("../schemas-joi/inmueble");
const validator = require('express-joi-validation').createValidator({})

const mysqlConnection=require('../db/sql');


//Selección todos los inmuebles
router.get('/inmuebles',(req,res) =>{
    mysqlConnection.query(`SELECT * FROM inmuebles; `,(err,rows,fields)=>{
          if(!err){
            if(rows){
              res.json(rows);
            //   res.status(200).json({ error: 'OK' })
            }else{
                res.status(204).json({ error: 'NO CONTENT BD db.maquetas_web ' })   
            }
            }
          else
          {res.status(500).json({ error: 'INTERNAL SERVER ERROR' })       
        }
      });
});


//Filtra lineas por id
router.get('/inmuebles/:id',(req,res) =>{
    const {id}= req.params;
  
    mysqlConnection.query(`SELECT * FROM inmuebles WHERE id=?`,[id],(err,rows,fields)=>{
          if(!err){
              if(id== null){
                res.status(204).json({ error: 'NO CONTENT BD db.maquetas_web ' })  
              }
              else{
                if(rows.length>0){
              res.json(rows) ;}
              else{res.status(409).json({ error: `inmueble con id no existe` })}}
            }
          else
          {res.status(500).json({ error: 'INTERNAL SERVER ERROR' })}
      });
  });

//crea un nuevo inmueble

  router.post('/inmuebles',validator.body(inmuebleShema),(req,res)=>{
    const data=req.body;
    console.log(req.body);
       mysqlConnection.query('INSERT INTO inmuebles set ?', data,(err,inmuebles)=>{
        if(!err){
            res.status(200).json({ error: 'se crea nuevo inmueble' });}
        else{
            res.json(err);
        }
       });
    });

// Actualizar el inmueble de forma
router.put('/inmuebles/:id',validator.body(inmuebleShema),(req,res)=>{
    const {newinmueble}=req.body
    const {id} = req.params;

        mysqlConnection.query(`SELECT * FROM inmuebles WHERE id=?`,[id],(err,rows,fields)=>{
            if(!err){
                if(id== null){
                  res.status(204).json({ error: 'NO CONTENT BD db.maquetas_web ' })  
                }
                else{
                  if(rows.length>0){
                    mysqlConnection.query('UPDATE inmuebles set ? WHERE id = ?' , [req.body, id], (err, rows) =>{
                        if(!err) {
                         res.json({status: 'inmueble Updated'});
                          
                          } else {
                            console.log(err);
                          }
                        })
                 ;}
                else{res.status(409).json({ error: 'inmueble con id no existe' })}}
              }
            else
            {res.status(500).json({ error: 'INTERNAL SERVER ERROR' })}
        })
})

//eliminar inmueble 

router.delete('/inmuebles/:id',(req,res) =>{
    const {id}= req.params;
  console.log(id)
    mysqlConnection.query(`SELECT * FROM inmuebles WHERE id=?`,[id],(err,rows,fields)=>{
          if(!err){
              if(id== null){
                res.status(204).json({ error: 'NO CONTENT BD db.maquetas_web  ' })  
              }
              else{
                if(rows.length>0){
        mysqlConnection.query('DELETE FROM inmuebles WHERE id= ?',[id],(err,rows)=>{
        if(!err){
          res.status(200).json({ error: 'OK' })
        }
        else
        {res.status(500).json({ error: 'Internal error server' })}
    } );
                }
              else{res.status(409).json({ error: 'inmuebles con id no existe' })}}
            }
          else
          {res.status(500).json({ error: 'INTERNAL SERVER ERROR' })}
      });
  });


  //filtra los inmuebles pasandole num de inmueble min y num max   
router.get('/inmuebles/num/:num1,:num2',(req,res) =>{
  const {num1,num2}=req.params
  console.log(num1,num2)
  mysqlConnection.query(`SELECT * FROM inmuebles WHERE num >= '102' AND num <= '201'`,(err,rows,fields)=>{
        if(!err){
          if(rows){
            res.json(rows);
          //   res.status(200).json({ error: 'OK' })
          }else{
              res.status(204).json({ error: 'NO CONTENT BD db.maquetas_web ' })   
          }
          }
        else
        {res.status(500).json({ error: 'INTERNAL SERVER ERROR' })       
      }
    });
});


//Filtra lineas por id
router.get('/inmuebles/numero/:num',(req,res) =>{
  const {num}= req.params;

  mysqlConnection.query(`SELECT * FROM inmuebles WHERE num=?`,[num],(err,rows,fields)=>{
        if(!err){
            if(num== null){
              res.status(204).json({ error: 'NO CONTENT BD db.maquetas_web ' })  
            }
            else{
              if(rows.length>0){
            res.json(rows) ;}
            else{res.status(409).json({ error: `inmueble con número no existe` })}}
          }
        else
        {res.status(500).json({ error: 'INTERNAL SERVER ERROR' })}
    });
});

//crea un nuevo inmueble


module.exports = router ;