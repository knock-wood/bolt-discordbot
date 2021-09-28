module.exports.run = (bot,message) => {
  let answers = ["Да","Нет","Наверное","Не знаю"];
  message.reply(answers[Math.floor(Math.random() * answers.length)]);
}