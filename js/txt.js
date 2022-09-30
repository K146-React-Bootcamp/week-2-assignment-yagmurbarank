HTTP Durum Kodları 
________________________________________

- HTTP Durum Kodları (Status Codes) Nedir?

Kullanıcılar bir web sitesini ziyaret etmek istediklerinde iki taraflı bir iletişim ortaya çıkar. Bu iletişimin bir tarafında tarayıcı bulunurken diğer tarafta sunucu yer alır. Bu iletişim kullanıcının bir web sayfasına giriş yapmak istemesiyle başlar. Bir web sayfasına giriş yapan kullanıcı aslında tarayıcı aracılığıyla ilgili web sayfasının yer aldığı sunucuya sayfayı görüntülemek için bir istek gönderir. Sunucu ise bu isteğe üç haneli bir durum kodu ile yanıt verir. Sunucunun tarayıcıya verdiği üç haneli cevaplar HTTP durum kodları ya da HTTP status codes olarak adlandırılır. İlgili durum kodları bazen bir hata olduğunu bildirirken bazen de sayfanın herhangi bir sorun olmadan açıldığını ifade edebilir. Bu nedenle HTTP durum kodlarının daima hata olarak değerlendirilmesi doğru değildir. 

- HTTP Durum Kodları Neden Önemlidir?

HTTP durum kodları hem kullanıcılar hem de web siteleri için oldukça önemli bir unsurdur. Kullanıcılar giriş yapmak istedikleri web sayfaları ile alakalı bir sorun yaşandığında bu sorunun nereden ve neden kaynaklandığını bilmek isterler. Bu nedenle kullanıcılar için HTTP durum kodları oldukça önemlidir. Aynı şekilde olaya web sitesi tarafından baktığımızda da sayfaları belirli sorun ya da sorunlar nedeniyle açılmayan web siteleri hem kullanıcı deneyimi hem de SEO performansı tarafında olumsuz etkilenebilir. Bu nedenle sunucudan kullanıcılara hangi yanıt kodlarının gittiği sorunun kaynağının anlaşılması ve çözüme kavuşturulması açısından oldukça önemlidir.

- HTTP Durum Kodu Sınıfları

1xx: Tarayıcı tarafından gönderilen isteğin sunucuya ulaştığını ve işlemin başladığını bildiren bilgilendirme kodlarını ifade eden durum kodlarıdır.
2xx: Tarayıcı tarafından gönderilen isteğin sunucuya ulaştığını, anlaşıldığını ve başarılı olduğunu ifade eden durum kodlarıdır.
3xx: Erişilmek istenen kaynağın başka bir kaynağa taşındığını ve bir yönlendirmenin söz konusu olduğunu ifade eden durum kodlarıdır.
4xx: İsteğin yerine getirilemediğini, ilgili web sayfasına ya da web sitesine ulaşılamadığını ifade eden durum kodlarıdır.
5xx: Tarayıcı tarafından gönderilen isteğin başarıyla sunucuya ulaştığını fakat sunucu tarafındaki sorunlar nedeniyle isteğin yerine getirilemediğini ifade eden durum kodlarıdır.


- En Sık Karşılaşılan Durum Kodları

Tarayıcı ile sunucu arasındaki iletişim sonucunda ortaya çıkan durum kodları anlamları bakımından çeşitlilik göstermektedir. En sık karşılaşılan ve web siteleri için en büyük etkiye sahip durum kodlarını beraber inceleyelim.
200 Durum Kodu (Başarılı)
En kısa tanımıyla ideal durum kodudur. Bir web sayfası sorunsuz şekilde açılıyorsa sunucudan tarayıcıya 200 durum kodu gönderilir. Sunucudan tarayıcıya 200 durum kodu iletiliyorsa ziyaretçi ve web sitesi için her şey olması gerektiği gibidir diyebiliriz.
301 Durum Kodu (Kalıcı Yönlendirme)
Bir web sayfasının kalıcı olarak bir başka web sayfasına yönlendirildiği ve sayfayı ziyaret eden kullanıcının da otomatik olarak yönlenmesini sağlayan durum kodudur. 301 durum kodu kullanılarak yönlendirilen sayfalar içerik bakımından çok benzer ya da alakalı olduğunda güç kaybı en aza indirilebilir. Bu nedenle web sitesi taşıma gibi işlemlerde kullanılması önerilen en önemli durum kodlarından biridir.
302 Durum Kodu (Geçici Yönlendirme)
Bir web sayfasının geçici olarak bir başka web sayfasına yönlendirildiğini ifade eden durum kodudur. 301 yönlendirme kodundan farkı ilgili sayfanın test aşamasında olması, bakıma alınması ya da bir e-ticaret sitesi için ilgili ürünün stoklarının geçici olarak tükenmesi gibi ilgili sayfanın tekrar aktif edileceği durumlarda kullanılmasıdır. Fakat kullanıcılar 301 yönlendirmesi ile 302 yönlendirmesi arasındaki farkı anlamayacaktır. İlgili sayfaya giriş yapan kullanıcılar direkt olarak diğer sayfaya yönlendirilecektir.
403 Durum Kodu (Erişim İzni Sorunu)
Kullanıcının bir web sayfasına erişmek adına sunucuya gönderdiği isteğe karşılık ilgili web sayfasına erişim izni olmadığı ya da ilgili web sayfasının yasaklandığını ifade eden durum kodudur.
404 Durum Kodu (Bulunamadı)
Kullanıcının görüntülemek istediği web sayfasının ilgili sunucuda bulunmadığını ifade eden durum kodudur. İlgili web sayfası silinmiş ya da URL’si değiştirilmiş olabilir. Fakat 404 durum kodları ilgili sayfanın geçici ya da kalıcı olarak ulaşılamadığı hakkında bir fikir vermez. Kullanıcılar ulaşmak istedikleri bir web sayfasında 404 durum kodu ile karşılaştıklarında genelde siteyi terk ederek farklı web sitelerine yönelirler. Özellikle çok trafik alan ya da URL’i kullanıcılar tarafından bilinen bir sayfa ise bu durum ilgili web sitesini kötü etkileyecektir. Bu nedenle 404 durum kodu içeren sayfaların alakalı karşılıkları varsa yönlendirilmesi önerilir.

Fakat ilgili web sayfası bir süre sonra tekrar aktif olacak ya da bir e-ticaret sitesi için ilgili ürün tekrar stoklarda yer alacaksa ilgili sayfanın 404 durum kodu içerecek şekilde kalması daha doğru olacaktır. 404 şeklinde bırakılan web sayfalarındaki kullanıcıları kaybetmeyip farklı sayfalara yönlendirerek web sitesi içerisinde tutmaya çalışmalıyız. Bu nedenle özel olarak tasarlanan custom 404 sayfaları ile kullanıcıların web sitesini terk etmek yerine farklı sayfalara yönelmelerine yardımcı olabiliriz.

410 Durum Kodu (Kalıcı Olarak Bulunmuyor)

Kullanıcının erişmek istediği web sayfasının sunucuda bulunmadığını ifade eden durum kodudur. 404 durum kodundan farkı ilgili web sayfasının kesin ve kalıcı olarak silindiğini ve geri gelmeyeceğini ifade etmektedir. Ayrıca arama motoru botları 410 durum kodu içeren web sayfaları ile karşılaştığında arama motorları ilgili sayfayı dizinden daha hızlı çıkarabilir. Bu nedenle kullanılırken oldukça dikkate edilmesi gereken durum kodlarından biridir.

500 Durum Kodu (Sunucu Hatası)

Sunucu kaynaklı problemlerde karşılaşılan durum kodudur. Sunucuda bir şeylerin ters gittiğini ifade etmektedir. 500 durum kodu içeren web siteleri için ilgili sunucu probleminin en kısa sürede çözülmesi gerekir. Çünkü arama motorları kullanıcıların ya da arama motoru botlarının erişemediği web sitelerini kullanıcılarına sunmak istemeyecektir.

503 Durum Kodu (Sunucu Kullanılamıyor)

Sunucu tarafında geçici bir sorun olduğunu ifade eden durum kodudur. Genelde sunucuların bakımda olduğu ya da aşırı yüklenme sonucu geçici olarak devre dışı kaldığı durumlarda karşılaşılır. Örneğin üniversite sınavı sonuçları açıklandığında ÖSYM sitesinin ya da büyük bir indirimde ilgili web sitesine geçici süreyle ulaşılamaması bu duruma örnek olarak gösterilebilir. Ayrıca kötü niyetli kişiler tarafından bant genişliğine yönelik yapılan saldırılarda da sunucu geçici olarak devre dışı kalacak ve kullanıcılar ilgili web sitesine giriş yapmak istediklerinde 503 durum kodu ile karşılaşacaktır.

- Diğer HTTP Durum Kodları ve Anlamları

En sık karşılaşılan ve SEO açısından en önemli olan durum kodlarını yukarıda beraber inceledik. Çok sık görülmese de karşılaşılabilen diğer durum kodlarına ve anlamlarına aşağıdan ulaşabilirsiniz.

1xx Durum Kodları
100: Tarayıcının sunucuya gönderdiği istek başlığının sunucu tarafından alındığını ve istek gövdesinin de alınmaya hazır olduğu anlamına gelir.
101: Tarayıcının sunucudan protokol değiştirmesini istediği ve sunucunun da bu isteği kabul ettiği anlamına gelir.
103: Son istek iletisinden önce bazı yanıt başlıklarını döndürdüğü anlamına gelir.


2xx Durum Kodları
200: Tarayıcı ve sunucu tarafında her şeyin yolunda olduğu anlamına gelen ideal durum kodudur.
201: Sunucu tarafından isteğin yerine getirildiği ve yeni bir kaynak oluşturulduğu anlamına gelir.
202: Sunucunun tarayıcıdan gelen isteği kabul ettiği ve işleme koyduğu anlamına gelir. İstek olumlu ya da olumsuz sonuçlanabilir.
203: Kaynak sunucudan 200 durum kodu alınmasına rağmen işlem sırasında kaynağın yanıtı değiştirdiği anlamına gelir.
204: Sunucunun isteği başarıyla işlediği fakat herhangi bir içerik döndürmeyeceğini ifade eder.
205: 204 durum kodu gibi isteğin başarıyla işlendiği fakat herhangi bir içeriğin döndürülmeyeceği anlamına gelir. Ancak tarayıcının belge görünümünü sıfırlaması gerekir.
206: Tarayıcının durdurulmuş indirmelere devam etmesini ve indirmeleri birden fazla akışa ayırmasını sağlayan durum kodudur.


3xx Durum Kodları
300: Tarayıcının isteğini yerine getirmek için sunucunun birden fazla olası kaynağa sahip olduğu ve bu kaynaklar arasında seçim yapması gerektiği anlamına gelir.
301: Bir web sayfası ya da bir kaynağın kalıcı olarak farklı bir kaynağa taşındığını ifade eden durum kodudur.
302: Bir web sayfası ya da bir kaynağın geçici olarak farklı bir kaynağa taşındığını ifade eden durum kodudur.
303: POST, PUT ya da DELETE aracılığıyla tarayıcının talep ettiği kaynağın bulunduğu anlamına gelir. GET kullanarak kaynağı almak için farklı bir URL’ye istekte bulunulması gerekir.
304: Tarayıcıya önbelleğinde depolanan kaynakların değişmediğini belirten durum kodudur.
307: Bir kaynağın geçici olarak farklı bir kaynağa taşındığını ifade eden durum kodudur. 302 durum kodundan farklı olarak HTTP yönetiminin değişmesine izin vermez.
308: Bir kaynağın kalıcı olarak farklı bir kaynağa taşındığını ifade eden durum kodudur. 301 durum kodundan farklı olarak HTTP yönetiminin değişmesine izin vermez.


4xx Durum Kodları
400: Sunucunun tarayıcıdaki hata nedeniyle isteği işleyemediği anlamına gelen durum kodudur.
401: Kullanıcının erişmek istediği kaynak için geçerli kimlik doğrulama bilgilerine sahip olmadığında döndürülen durum kodudur.
402: Ödeme gerektiği ve gelecekte kullanılmak üzere rezerve edildiği anlamına gelen durum kodudur.
403: İlgili kaynağa erişimin yasak olduğu durumlarda döndürülen durum kodudur.
404: İstenen kaynağın sunucuda bulunmadığını ifade eden durum kodudur. En sık görülen HTTP durum kodlarının başında gelmektedir.
405: İstenilen kaynak için gerçekleştirilen istek yöntemi desteklenmediğinde döndürülen durum kodudur.
406: İstemcinin Accept Header bölümünde verilen özelliklerin karşılanmadığını ifade eden durum kodudur. 
407: Bir proxy sunucu ile kimlik doğrulaması ve yetkilendirme gereken durumlarda döndürülen durum kodudur.
408: Sunucunun isteği beklerken zaman aşımına uğraması durumunda karşılaşılan durum kodudur.
409: Bir uyuşmazlık ya da çakışma olması nedeniyle isteğin tamamlanamadığı anlamına gelen durum kodudur.
410: İstenen kaynağın kalıcı olarak o sunucuda bulunmadığı anlamına gelen durum kodudur.
411: İstenen kaynak için belirli bir uzunluk belirtilmediği anlamına gelen durum kodudur.
412: İstekte bulunan ön koşulların sunucu tarafından karşılanamadığı anlamına gelen durum kodudur.
413: Yapılan isteğin boyutunun çok büyük olması nedeniyle işlenemediği ve sunucunun isteği kabul edemediği anlamına gelir.
414: Sunucunun işleyemeyeceği kadar büyük bir sorgu dizesi olarak kodlanmış GET isteği olduğu durumlarda karşılaşılan durum kodudur.
415: Gelen isteğin sunucu tarafından desteklenmeyen bir ortam türü içerdiği anlamına gelen durum kodudur.
416: Dosyanın istenilen bir bölümünü sunucunun sağlayamaması durumunda karşılaşılan durum kodudur.
417: Sunucunun isteğin bekleme başlığı alanındaki gereksinimleri karşılayamaması durumunda karşılaşılan durum kodudur. 
422: Anlamsal hata içeren istekleri sunucunun işleyemediği anlamına gelen durum kodudur.
425: Sunucunun yeniden oynatılabilecek istekleri işleme riskini almadığı durumlarda ortaya çıkan durum kodudur.
426: İsteğin yükseltme başlığı alanındaki içerikten dolayı farklı bir protokole geçilmesi gereken durumlarda karşılaşılan durum kodudur.
428: Sunucu isteği işlemeden önce koşulların belirlenmesi gerektiği anlamına gelen durum kodudur.
429: Kullanıcı belirli  bir süre içerisinde çok fazla istek gönderdiğinde sunucu tarafından hız sınırlayıcı oluşturulduğu anlamına gelen durum kodudur.
431: Üst bilgi alanlarının büyük olması nedeniyle sunucunun isteği işleyememesi anlamında gelen durum kodudur.


5xx Durum Kodları
500: Sunucudaki sorun nedeniyle isteğin tamamlanamadığı durumlarda görülen durum kodudur.
501: Sunucunun isteği yönetemediği ya da işlevleri destekleyemediği anlamında gelen durum kodudur.
502: Sunucunun başka bir sunucuya istek gönderdikten sonra geçersiz yanıt aldığı anlamına gelen durum kodudur.
503: Sunucunun geçici olarak hizmet veremediği ve istekleri işleyemediği durumlarda görülen durum kodudur.
504: Bir isteği işlerken bir sunucunun diğer sunucudan yanıt beklerken isteğin zaman aşımına uğraması durumunda görülen durum kodudur.
505: HTTP protokol sürümünün desteklenemediği anlamında gelen durum kodudur.
511: Kullanılmak istenen ağın isteği sunucuya iletmeden önce kimlik doğrulaması yapması gerektiği durumlarda görülen durum kodudur.

HTTP Metotları ( Http Request Methods)

HTTP, web browser ile web server arasında iletişim kurmamızı sağlayan bir protokoldür.

HTTP 1.1 versiyonu (RFC 2616) ile tanımlanan ve diğer eklentilerle gelen başlıca HTTP metodları şunlardır:

1-) GET: Bu metod sunucudan veri almak için kullanılır. GET ve POST metodları en sık kullanılan metodlar olup sunucudaki kaynaklara erişmek için kullanılırlar.
GET metodu ile sorgu metinleri URL içinde gönderilebilir. Bunun en önemli faydası kullanıcıların bookmark edebilmeleri ve aynı sorguyu içeren istekleri daha sonra gönderebilmelerini sağlaması ve tarayıcıda önceki sorguların “geri” tuşu ile veya tarayıcı geçmişinden çağrılarak aynı sayfalara ulaşabilmeleridir. Güvenlik açısından URL’lerin ekranda görüntüleniyor olması ve URL’in hedefine ulaşıncaya kadar ve hedef sunucu üzerinde iz kayıtlarında görülebilmesi gönderilen parametrelerin gizlilik ihtiyacı varsa sıkıntı yaratabilir. Bu nedenlerle hassas isteklerin GET ile gönderilmemelidir.
2-)POST: Bu metod ile sunucuya veri yazdırabilirsiniz. Bu metodla istek parametreleri hem URL içinde hem de mesaj gövdesinde gönderilebilir. Sadece mesaj gövdesinin kullanımı yukarıda sayılan riskleri engelleyecektir. Tarayıcılar geri butonuna basıldığında POST isteğinin mesaj gövdesinde yer alan parametreleri tekrar göndermek isteyip istemedimizi sorarlar. Bunun temel nedeni bir işlemi yanlışlıkla birden fazla yapmayı engellemektir. Bu özellik ve de güvenlik gerekçeleriyle bir işlem gerçekleştirileceğinde POST metodunun kullanılması önerilir.
3-)PUT: Bu metod ile servis sağlayıcı üzerindeki bir kaynağı güncelleyebilirsiniz. Hangi kaynağı güncelleyecekseniz o kaynağın id’sini göndermek zorunludur.
4-)HEAD: GET metoduyla benzer işleve sahiptir ancak geri dönen yanıtta mesaj gövdesi bulunmaz (yani başlıklar ve içerikleri GET metoduyla aynıdır). Bu nedenle GET mesajı gönderilmeden önce bir kaynağın var olup olmadığını kontrol etmek için kullanılabilir.
5-)DELETE: Bu metod ile sunucudaki herhangi bir veriyi silebilirsiniz.
6-)CONNECT: Bir proxy sunucu üzerinden başka bir sunucuya bağlanmak ve proxy sunucuyu bir tünel gibi kullanmak için kullanılır.
7-)OPTIONS: Bu metod belli bir kaynak için kullanılabilecek HTTP metodlarını sunucudan sorgulamak için kullanılır.
8-)TRACE: Teşhis amaçlı kullanılan bir metoddur. Sunucu bu metodla gelen istek mesajının içeriğini aynen yanıt gövdesinde geri göndermelidir. Bu yöntemle sunucu ile istemci arasında bir vekil sunucu varsa bu sunucunun ve yaptığı değişikliklerin tespiti mümkün olabilir.
9-)PATCH: Bu metod bir kaynağa istediğiniz küçük çaplı değişimi yapmanızı sağlar.
10-)SEARCH: Bir dizinin altındaki kaynakları sorgulamak için kullanılır.

Javascript Fetch Kullanımı

Fetch API, tıpkı Ajax gibi veri alma, veri gönderme işlemlerinde kullanılan asenkron bir yapıdır. Fetch ile yapılan işlemler bize resolved, rejected şeklinde yani promise yapısı ile döndüğü için fetch kullanımını daha iyi anlayabilmek için promise yapısını bilmemiz gerekir. Fetch API window içinde bulunan bir metottur. 

Function getTextFile(){
fetch(“example.txt”)
.then(response = > response.text())
.then(data=>console.log(data))
.catch(err=>console.log(err));
}
getTextFile();

fetch fonksiyonu ile nereden bilgi almak istediğimizi yazdık.(Fetch bize promise döndüğü için then ve catch kullanmamız gerektiğini hatırlayalım.)Oluşan promise içindeki veriyi response.text ile return ettik ve ekrana yazdırdık.example.txt içinde Zeynep Şahin yazdığını düşünürsek response.text Zeynep Şahinolarak ekrana basılır.


JSON File Verisi Alma



Function getJsonFile(){
fetch(“example.json”)
.then(response = > response.json())
.then(data=>console.log(data))
}
getJsonFile();


REST APIden Veri Alma
Burada diğer iki örnekten farklı olarak example.txt veya example.json yerine kullanacağımız APInin endpointini yazıyoruz.

Function getDataApi(){
fetch(“https://api.vsvsvs/endpoint”)
.then(response = > response.json())
.then(data=>console.log(data))
}
getDataApi ();

Genel olarak kullanımları bu şekilde, fetch fonksiyonuna veri almak istediğimiz yeri yazıyoruz ve promise döndüğü için then ile alıyoruz.

Fetch API İle Çalışmak

Fetch API, kaynakları (ağ genelinde dahil) getirilmesine yönelik basit bir arayüzdür. Ajax yerine alternatif olarak asenkron veri alıp ve veri göndermemizi sağlar. Promise tabanlı olduğu için async bir yapıdır. Promise ES6 ile gelen bir özelliktir. Callback fonksiyonlarının yerine kullanabiliyoruz. Fetch API'da promise yapısını kullanarak bizim Ajax'ın yerine kullanabileceğimiz bir yapı sunuyor. Ayrıca Fetch API window objesi ile birlikte geliyor. Eğer window objesini konsolda yazdırırsak bu window objesinin altında fetch metodunu görebilirsiniz.
Fetch API ile yapabildiğimiz şey bir veri sunucudan geldikten sonra işlem yapabilmektir. Peki bu ne demektir? Diyelim ki bir yere gittiniz ve sipariş veriyorsunuz. Kasadaki kişi siparişi aldıktan sonra kasada beklersek bir sonraki kişinin siparişinin vermesini engelleriz. Belki de bir sonraki kişinin siparişi çok daha hızlı hazırlanabilirdi. Bu durumda şunu da unutmamak lazım biz ne zaman sipariş ettiğimiz ürünleri gidip almak isteriz? Tabii ki siparişimiz hazırlandıktan sonra. Burada aslında yeni gelen kavramlardan bir tanesi olan Promise'i kullanırız.


Fetch Interfaces

*fetch(), bu yöntem bir kaynak almak için kullanılır.
*Headers, response/request başlıklarını temsil ederek bunları sorgulamanıza ve sonuçlara bağlı olarak farklı eylemler gerçekleştirmenize olanak tanır.
*Request , bir kaynak talebini temsil eder.
*Response, bir isteğe verilen yanıtı temsil eder.
Temel Fetch Kullanımı
Fetch API’ yi kullanmak için fetch metoduna istek yapacağımız url’ i parametre olarak vermek gerekiyor.
fetch(url);
fetch() metodundan sonra, metodun sonuna then() promise metodunu ekleriz:
.then(function() {
})

//Örneğin “https://jsonplaceholder.typicode.com/todos” adresine get isteğinde bulunalım.
//// GET İsteği

fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json()) //parse json data
	.then(function (todos) {
		todos.forEach((todo) => {
			console.log(todo.title); //Başlıkları console' a yazdırma
		});
	});

POST İsteği Yapma

POST isteği ile verimizi servera gönderelim

let payload = {
    title: "Blog Title",
    body: "lorem ipsum",
    userId:1
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));


Aşama aşama fetch().then().then().catch() yapısı:

fetch("https://jsonplaceholder.typicode.com/todos");
//Fetch isteği yaptığımızda then fonksiyonunu çağırır.
.then((response) => response.json())
//Her şey yolunda giderse gelen veri, then içerisinde bize response olarak gelir. Ve response’u parametre olarak alırız, json içeriğini elde etmek için .json() metodunu kullanırız.
.then(function(todos){
    todos.forEach(todo => {
        console.log(todo.title);//Başlıkları console' a yazdırma
    });
})
//Bu kez then() metodu içerisinde, önceki metottan gelen sonucu alarak console’da gösterecek bir fonksiyon yazdık. Bu fonksiyon, todos adında bir parametre alıyor ve her todos ’dan forEach metodu yardımıyla todos.title değerini alıp console’a yazdırıyoruz.
.catch((err) => console.log(err))
//Ve en sonunda catch() metoduyla herhangi bir aşamada hata oluşursa, bu hatayı parametre olarak alıp console’a yazdırıyoruz.

  

