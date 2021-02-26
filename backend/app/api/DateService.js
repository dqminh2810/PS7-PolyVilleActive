class DateService{
  wordToN = {
    janvier: '01',
    fevrier: '02',
    mars: '03',
    avril: '04',
    mai: '05',
    juin: '06',
    juillet: '07',
    aout: '08',
    septembre: '09',
    octobre: '10',
    novembre: '11',
    decembre: '12',
  };

  tradDate(date) {

    const date1 = /^\d{4}-\d{2}-\d{2}/;
    if (date.match(date1)) {
      return date.replace('-', '').replace('-', '');
    }
    const data = date.split(' ');
    if (data.length === 2) {
      data.push('2020');
    }
    let txt = `${data[2]}${(this.wordToN)[data[1]]}${data[0]}`;
    return txt;
  }

  tradString(string){
    if(string.includes('au')){
      let str = string.split(' au ');
      const date1 = str[0].split(' ');
      const date2 = str[1].split(' ');
      let same = date1.length===1;
      date2[1] = this.wordToN[date2[1]];
      date1[1] = (same)?(date2[1]):(date1[1]);
      let next1 = "";
      date1.reverse().forEach(th => {
        next1 += th +"-";
      });
      next1 = new Date().getFullYear() + "-" + next1;
      let next2 = "";
      date2.reverse().forEach(th => {
        next2 += th +"-";
      });
      next2 = new Date().getFullYear() + "-" + next2;
      str = [next1.substring(0, next1.length-1), next2.substring(0, next2.length-1)];
      return str;
    }
    if(string.match(/^\d{4}-\d{2}-\d{2}/))
      return [string, string];
  }

  displaySeconds(d){
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

    return hDisplay + mDisplay + sDisplay;
  }
}

module.exports = {DateService};
