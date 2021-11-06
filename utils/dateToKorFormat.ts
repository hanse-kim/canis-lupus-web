const dateToKorFormat = (dateString: string) => {
  const date = new Date(dateString);
  const ampm = date.getHours() < 12 ? '오전' : '오후';
  return `${date.getMonth()}월 ${date.getDate()}일 ${ampm} ${
    date.getHours() % 12
  }:${date.getMinutes()}`;
};

export default dateToKorFormat;
