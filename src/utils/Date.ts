const actualDate = (date: Date) => {
    var data = date,
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'),
        ano  = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}

function idade(nascimento: Date) {
  var hoje = new Date,
      ano_atual = hoje.getFullYear(),
      mes_atual = hoje.getMonth() + 1,
      dia_atual = hoje.getDate(),

      ano_nascimento = nascimento.getFullYear(),
      mes_nascimento = nascimento.getMonth() + 1,
      dia_nascimento = nascimento.getDay(),

      ano_nascimento = +ano_nascimento,
      mes_nascimento = +mes_nascimento,
      dia_nascimento = +dia_nascimento,

      quantos_anos = ano_atual - ano_nascimento;

  if (mes_atual < mes_nascimento || mes_atual == mes_nascimento && dia_atual < dia_nascimento) {
      quantos_anos--;
  }

  return quantos_anos < 0 ? '0' : quantos_anos.toString();
}

export { actualDate, idade }
