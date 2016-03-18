/**
 * Created by debarshi.bhaumik on 3/18/2016.
 */
Raven.config('https://45421b20477346469eac8e32cf31411a@app.getsentry.com/71018').install()


document.getElementById("submitBtn").onclick = function () {
    console.log("Hello");
    doSomething(a[0]);
};
//try {
//    doSomething(a[0])
//} catch (e) {
//    Raven.captureException(e)
//}