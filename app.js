function calcularTotal(itens) {

   let total = 0

   for (let i = 0; i < itens.length; i++) {

       total += itens[i].preco *

   }

   // aplique desconto de fidelidade 
   // antes de rotornar o valor final


   return total
}