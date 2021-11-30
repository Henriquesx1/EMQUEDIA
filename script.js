function Exibir()
      {
         var d_ani = parseInt(document.getElementById("dia").value);
         var m_ani = parseInt(document.getElementById("mes").value);
         var a_ani = parseInt(document.getElementById("ano").value);

         var hoje = new Date();

         var d_hoje = hoje.getDate();
         var m_hoje = hoje.getMonth()+1;
         var a_hoje = hoje.getFullYear();
            
               hoje.setDate(d_ani);
               hoje.setMonth(m_ani-1);
               hoje.setFullYear(a_ani);

               var diaSemana = new Array();
               diaSemana [0] = "Em um domingo";
               diaSemana [1] = "Em uma segunda-feira";
               diaSemana [2] = "Em uma terça-feira";
               diaSemana [3] = "Em uma quarta-feira";
               diaSemana [4] = "Em uma quinta-feira"; 
               diaSemana [5] = "Em uma sexta-feira";
               diaSemana [6] = "Em um sábado";

               var nomeMes= new Array();
               nomeMes [0] = "Janeiro";
               nomeMes [1] = "Fevereiro";
               nomeMes [2] = "Março";
               nomeMes [3] = "Abril";
               nomeMes [4] = "Maio";
               nomeMes [5] = "Junho";
               nomeMes [6] = "Julho";
               nomeMes [7] = "Agosto";
               nomeMes [8] = "Setembro";
               nomeMes [9] = "Outubro";
               nomeMes [10] = "Novembro";
               nomeMes [11] = "Dezembro";

               document.getElementById("rDia").value = diaSemana[hoje.getDay()];
               document.getElementById("rMes").value = nomeMes[m_ani-1];

               if(d_ani == "" || m_ani == "" || a_ani == "") {
                alert("Preencha os campos abaixo corretamente!");
                location.reload(); 
               }
               else {

              
               var idade = a_hoje - a_ani; 
               if (m_ani > m_hoje) 
                  idade = idade - 1 ;

               else if ((m_ani == m_hoje) && (d_ani > d_hoje)) 
                  idade = idade - 1 ;

               document.getElementById("rAnos").value=idade;

               if (((d_ani>= 20) && (m_ani=1) || (d_ani<= 18) && (m_ani == 2))) 
               document.getElementById("rSigno").value = "Aquário";
               else if (((d_ani>= 19) && (m_ani=2) || (d_ani<= 20) && (m_ani == 3))) 
               document.getElementById("rSigno").value = "Peixes";
               else if (((d_ani>= 21) && (m_ani=3) || (d_ani<= 19) && (m_ani == 4))) 
               document.getElementById("rSigno").value = "Áries";
               else if (((d_ani>= 20) && (m_ani=4) || (d_ani<= 20) && (m_ani == 5))) 
               document.getElementById("rSigno").value = "Touro";
               else if (((d_ani>= 21) && (m_ani=5) || (d_ani<= 20) && (m_ani == 6))) 
               document.getElementById("rSigno").value = "Gêmeos";
               else if (((d_ani>= 21) && (m_ani=6) || (d_ani<= 22) && (m_ani == 7))) 
               document.getElementById("rSigno").value = "Câncer";
               else if (((d_ani>= 23) && (m_ani=7) || (d_ani<= 22) && (m_ani == 8))) 
               document.getElementById("rSigno").value = "Leão";
               else if (((d_ani>= 23) && (m_ani=8) || (d_ani<= 22) && (m_ani == 9))) 
               document.getElementById("rSigno").value = "Virgem";
               else if (((d_ani>= 23) && (m_ani=9) || (d_ani<= 22) && (m_ani == 10))) 
               document.getElementById("rSigno").value = "Libra";
               else if (((d_ani>= 23) && (m_ani=10) || (d_ani<= 21) && (m_ani == 11))) 
               document.getElementById("rSigno").value = "Escorpião";
               else if (((d_ani>= 22) && (m_ani=11) || (d_ani<= 21) && (m_ani == 12))) 
               document.getElementById("rSigno").value = "Sargitário";
               else
               document.getElementById("rSigno").value = "Capricórnio";
            
      }
    }
function VerificaDia()
      {
         var dia = document.getElementById("dia").value;

         if (dia == 0)
         {
            alert("Dígite uma data maior que ZERO!");
            location.reload(); 
         }  
         else
         {
            if((dia<1)||(dia>31))
            {
               alert("Essa data não existe!") ; 
               location.reload();
            }
         }
      }
      function VerificaMes()
      {
         var mes = document.getElementById("mes").value;
         if (mes == "")
         {
            alert("Preencha corretamente!");
         }
         else
         {
            if((mes<1)||(mes>12))
            {
               alert("Essa mês não existe!") ; 

            }
         }
      }
      

      function limpar()
	   {
         document.getElementById("dia").focus();
      }
