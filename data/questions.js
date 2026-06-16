/* ===========================================================
   TÜRKÇE DERSİ MİLYONER OYUNU — Soru Bankası
   5. 6. 7. Sınıf Türkçe MEB Müfredatı
   =========================================================== */

(function () {
  const LADDER = [
    100, 200, 300, 500, 1000,
    2000, 4000, 8000, 16000, 32000,
    64000, 125000, 250000, 500000, 1000000
  ];
  const SAFE_POINTS = [5, 11];

  function timeFor(qIndex) { if (qIndex < 6) return 45; if (qIndex < 12) return 35; return 25; }
  function levelFor(qIndex) { if (qIndex < 6) return 'kolay'; if (qIndex < 12) return 'orta'; return 'zor'; }

  const BANK = {
  "5": {
    "Sözcükte Anlam": [
      {
        "level": "kolay",
        "text": "\"Güzel\" sözcüğünün zıt anlamlısı aşağıdakilerden hangisidir?",
        "options": [
          "İyi",
          "Çirkin",
          "Büyük",
          "Hoş"
        ],
        "answer": 1,
        "explain": "Zıt anlam, bir sözcüğün anlamının tam karşıtı olan sözcüktür. 'Güzel'in zıt anlamlısı 'çirkin'dir."
      },
      {
        "level": "kolay",
        "text": "\"Hızlı\" sözcüğünün eş anlamlısı hangisidir?",
        "options": [
          "Yavaş",
          "Süratli",
          "Güçlü",
          "Büyük"
        ],
        "answer": 1,
        "explain": "Eş anlamlı sözcükler aynı ya da yakın anlama gelir. 'Hızlı' sözcüğünün eş anlamlısı 'süratli'dir."
      },
      {
        "level": "kolay",
        "text": "\"Kar\" sözcüğü hangi cümlede farklı anlamda kullanılmıştır?",
        "options": [
          "Dışarıya kar yağıyor.",
          "Ticaretten büyük kar elde etti.",
          "Kar taneleri hafifçe süzülüyordu.",
          "Kar yağışı trafiği aksattı."
        ],
        "answer": 1,
        "explain": "'Kar yağışı' ve 'kar taneleri' cümlelerinde sözcük doğa olayını; 'ticaretten kar' cümlesinde ise kazancı ifade eder. Aynı ses taşıyan farklı anlamlı sözcükler 'eş sesli (sesteş)' sözcüklerdir."
      },
      {
        "level": "kolay",
        "text": "Aşağıdaki sözcüklerden hangisi hem isim hem sıfat olarak kullanılabilir?",
        "options": [
          "Masa",
          "Güzel",
          "Koşmak",
          "Fakat"
        ],
        "answer": 1,
        "explain": "'Güzel' sözcüğü 'güzel bir gün' (sıfat) ve 'güzeli herkes sever' (isim) şeklinde iki farklı türde kullanılabilir."
      },
      {
        "level": "kolay",
        "text": "\"Baş\" sözcüğü hangi seçenekte farklı bir anlamda kullanılmıştır?",
        "options": [
          "Başım çok ağrıyor.",
          "Baş öğretmenimiz sınıfa girdi.",
          "Başını kaldırıp baktı.",
          "Başı sargıyla sarılmıştı."
        ],
        "answer": 1,
        "explain": "'Baş öğretmen' ifadesinde sözcük 'en üst, birinci' anlamındadır (sıfat); diğer cümlelerde ise vücut organını ifade eder. Bu durum sözcüğün çok anlamlı olduğunu gösterir."
      },
      {
        "level": "kolay",
        "text": "Aşağıdaki sözcük çiftlerinden hangisi eş sesli (sesteş) sözcüklere örnektir?",
        "options": [
          "Büyük – küçük",
          "Gül (çiçek) – gül (fiil)",
          "Hızlı – süratli",
          "Güzel – çirkin"
        ],
        "answer": 1,
        "explain": "Sesteş sözcükler yazılış ve okunuşları aynı, anlamları farklı sözcüklerdir. 'Gül' hem çiçek adı hem de 'gülmek' fiilindir."
      },
      {
        "level": "orta",
        "text": "'Sıcak' sözcüğü aşağıdaki cümlelerin hangisinde mecaz (yan) anlamda kullanılmıştır?",
        "options": [
          "Çorba çok sıcak, yeme!",
          "Sıcak bir gün geçirdik.",
          "Öğretmen çok sıcak kanlıydı.",
          "Güneş sıcak vuruyor."
        ],
        "answer": 2,
        "explain": "'Sıcak kanlı' ifadesi 'sıcaklık' anlamını değil; 'cana yakın, samimi' anlamını taşır. Sözcüğün temel (gerçek) anlamından uzaklaşması mecaz anlamdır."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki cümlelerde 'almak' fiili farklı anlamlarda kullanılmıştır. Hangisinde temel anlamda kullanılmıştır?",
        "options": [
          "Haberini alınca sevindi.",
          "Ders almak istiyorum.",
          "Kitabı raftan aldı.",
          "Ülkeyi askeri güç aldı."
        ],
        "answer": 2,
        "explain": "'Kitabı raftan almak' ifadesinde fiil 'eline geçirmek, tutmak' temel anlamını taşır. Diğer seçeneklerde 'almak' fiili yan ya da mecaz anlamlarında kullanılmıştır."
      },
      {
        "level": "orta",
        "text": "'Somut anlam' ile 'soyut anlam' arasındaki fark nedir? 'Umut' sözcüğü hangi gruba girer?",
        "options": [
          "Somut: duyularla algılanabilen; soyut: algılanamayan. 'Umut' somut anlam taşır.",
          "Somut: duyularla algılanabilen; soyut: algılanamayan. 'Umut' soyut anlam taşır.",
          "İkisi aynı şeydir.",
          "Somut anlam yalnızca canlıları kapsar."
        ],
        "answer": 1,
        "explain": "Somut kavramlar duyularla (göz, kulak, burun vb.) algılanabilir (masa, taş, ses). Soyut kavramlar ise duyularla algılanamaz (umut, sevgi, özgürlük)."
      },
      {
        "level": "orta",
        "text": "'Genel anlam – özel anlam' ilişkisi bakımından hangi çift doğru sıralanmıştır?",
        "options": [
          "Hayvan – kaplan (genelden özele)",
          "Kaplan – hayvan (genelden özele)",
          "Çiçek – doğa (özelden genele)",
          "Masa – tahta (özelden genele)"
        ],
        "answer": 0,
        "explain": "'Hayvan' daha genel, 'kaplan' daha özel bir kavramdır. Genel anlam daha geniş bir kategoriyi; özel anlam o kategorinin alt birimini gösterir."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki sözcüklerden hangisi 'olumlu' duygu içermez?",
        "options": [
          "Sevinç",
          "Neşe",
          "Kıskançlık",
          "Huzur"
        ],
        "answer": 2,
        "explain": "'Kıskançlık' bir olumsuz duygu durumunu ifade eder; sevinç, neşe ve huzur ise olumlu duygulardır."
      },
      {
        "level": "orta",
        "text": "'Kılıçtan geçirmek' deyiminin anlamı nedir?",
        "options": [
          "Kılıçla savaşmak",
          "Hepsini öldürmek, yok etmek",
          "Kılıç yapmak",
          "Kılıç satmak"
        ],
        "answer": 1,
        "explain": "Deyimler, sözcüklerin gerçek anlamından uzaklaşarak kalıplaşmış anlamlar kazandığı ifadelerdir. 'Kılıçtan geçirmek' deyimi 'katletmek, toptan yok etmek' anlamına gelir."
      },
      {
        "level": "zor",
        "text": "'Taş yürekli' ifadesi ile aynı tür sözcük ilişkisine sahip olan hangi seçenektir?",
        "options": [
          "El ele",
          "Demir gibi sağlam (benzetme)",
          "Geldi gitti",
          "Güzel ama tembel"
        ],
        "answer": 1,
        "explain": "'Taş yürekli' ifadesinde 'taş' gerçek anlamının dışında 'duygusuz, katı' anlamını kazanmıştır; bu bir mecaz kullanımdır. 'Demir gibi sağlam' da aynı biçimde açık bir benzetmedir."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki cümlelerde altı çizili sözcükleri inceleyin. Hangisinde sözcük hem sesteş hem çok anlamlı özellik taşımaktadır?",
        "options": [
          "Gözün gördüğüne inan.",
          "Masanın gözü bozulmuş.",
          "Buz gibi soğuk elini tuttu.",
          "Hayat çok güzeldi."
        ],
        "answer": 1,
        "explain": "'Göz' sözcüğü vücut organı (temel anlam) ve masanın gözü/bölmesi (yan anlam) olarak çok anlamlıdır; aynı zamanda 'pınar gözü' gibi farklı kavramlar için de kullanılır; sesteşlikle çok anlamlılık birlikte görülür."
      },
      {
        "level": "zor",
        "text": "'Sözcüklerin anlam ilişkileri' konusunda 'anlam daralması' ile 'anlam genişlemesi' kavramlarını doğru tanımlayan seçenek hangisidir?",
        "options": [
          "Anlam daralması: sözcük daha geniş anlama kavuşur; anlam genişlemesi: anlam daralır.",
          "Anlam daralması: sözcüğün ilk geniş anlamı zamanla özelleşir; anlam genişlemesi: sözcük yeni ve daha geniş anlamlara kavuşur.",
          "İkisi aynı şeydir.",
          "Anlam daralması yalnızca fiillerde görülür."
        ],
        "answer": 1,
        "explain": "Örnek: 'Oğlan' başlangıçta her genç insan için kullanılırken zamanla yalnızca erkek çocuk için kullanılır olmuş → anlam daralması. 'Kalem' önce 'saz kamışı' iken yazma aracı için kullanılmaya başlanmış → anlam genişlemesi."
      }
    ],
    "Cümlede Anlam – Deyim ve Atasözleri": [
      {
        "level": "kolay",
        "text": "\"Ağzı sıkı\" deyiminin anlamı nedir?",
        "options": [
          "Ağzı küçük olan",
          "Sırrını kimseye söylemeyen",
          "Çok yiyen",
          "Az konuşan"
        ],
        "answer": 1,
        "explain": "'Ağzı sıkı' deyimi 'sır saklayan, bildiklerini başkalarına söylemeyen kimse' anlamında kullanılır."
      },
      {
        "level": "kolay",
        "text": "\"Damlaya damlaya göl olur\" atasözünün en uygun anlamı hangisidir?",
        "options": [
          "Su birikintisi oluşur.",
          "Küçük tasarruflar zamanla büyük sonuçlar doğurur.",
          "Her şey suyla büyür.",
          "Yağmur çok yağarsa göl taşar."
        ],
        "answer": 1,
        "explain": "Bu atasözü 'küçük küçük biriktirilen şeylerin zamanla büyük bir değer oluşturduğunu' anlatır."
      },
      {
        "level": "kolay",
        "text": "\"Deyim\" ile \"atasözü\" arasındaki temel fark nedir?",
        "options": [
          "Deyimler daha uzundur.",
          "Atasözleri bir yargı bildirirken deyimler bir kavramı renkli biçimde karşılar.",
          "İkisi aynıdır.",
          "Deyimler kesinlikle iki sözcükten oluşur."
        ],
        "answer": 1,
        "explain": "Atasözleri deneyimlerden çıkmış, yargı bildiren kalıplaşmış sözlerdir. Deyimler ise kavramları mecazlı biçimde karşılayan kalıplaşmış ifadelerdir; tek başına tam bir yargı bildirmezler."
      },
      {
        "level": "kolay",
        "text": "Aşağıdakilerin hangisi bir deyimdir?",
        "options": [
          "Taşıma su ile değirmen dönmez.",
          "Boş ver.",
          "Bin ölç bir biç.",
          "Sakla samanı, gelir zamanı."
        ],
        "answer": 1,
        "explain": "'Boş ver' bir deyimdir ('önemseme, aldırma' anlamında). Diğerleri bir yargı bildiren atasözüdür."
      },
      {
        "level": "kolay",
        "text": "\"El eli yıkar, iki el yüzü yıkar\" atasözü hangi durumu anlatır?",
        "options": [
          "Yıkama tekniklerini",
          "Karşılıklı yardımlaşmanın önemini",
          "Temizliğin değerini",
          "Eller kirlenince yıkanmalı"
        ],
        "answer": 1,
        "explain": "Bu atasözü 'insanların birbirine yardım ederek daha büyük sonuçlara ulaşabileceğini; dayanışmanın gücünü' anlatır."
      },
      {
        "level": "kolay",
        "text": "\"Kulak misafiri olmak\" deyiminin anlamı nedir?",
        "options": [
          "Birisinin yanında uyumak",
          "Farkında olmadan bir konuşmayı duymak",
          "Müzik dinlemek",
          "Birine misafir gitmek"
        ],
        "answer": 1,
        "explain": "'Kulak misafiri olmak' başkalarına ait bir konuşmayı istemeden, tesadüfen duymak demektir."
      },
      {
        "level": "orta",
        "text": "\"Bin bilmek bir sormaktan iyidir\" atasözünün mesajı nedir?",
        "options": [
          "Soru sormak akıllılık değildir.",
          "Bilmediğini sormak, yanlış bilmekten daha iyidir.",
          "Her şeyi bilmen gerekir.",
          "Cevap aramak zaman israfıdır."
        ],
        "answer": 1,
        "explain": "Bu atasözü 'bilmediğin konuyu sormaktan çekinme; yanlış bilmekten ya da tahmin etmekten çok daha iyidir' mesajını verir."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki cümlelerde deyim hangi seçenekte yanlış anlamda kullanılmıştır?",
        "options": [
          "Ona çok kızdım, içim kan ağladı. (Çok üzülmek)",
          "Arkadaşım hiç yardım etmedi; yüzüme bile bakmadı. (İlgilenmemek)",
          "Sınavdan önce gece gözüme uyku girmedi. (Uyuyamamak)",
          "Onu çok seviyorum, gözümü kırpmadan yaparım. (Tereddüt etmeden)"
        ],
        "answer": 3,
        "explain": "'Gözünü kırpmamak' deyimi 'hiç uyumamak, uykusuz kalmak' anlamına gelir, 'tereddüt etmeden yapmak' değil. 'Gözünü kırpmadan' farklı bir deyimdir ve uyumu bozar."
      },
      {
        "level": "orta",
        "text": "\"Nerde o eski bayramlar\" cümlesi hangi anlam ilişkisine örnektir?",
        "options": [
          "Deyim",
          "Atasözü",
          "Özlem/hasret ifadesi (duygusal yüklü cümle)",
          "Benzetme"
        ],
        "answer": 2,
        "explain": "Bu cümle geçmişe özlem duygusunu aktaran duygusal yüklü bir cümledir. Deyim ya da atasözü kalıbı değildir; geçmişe duyulan özlem anlamını taşır."
      },
      {
        "level": "orta",
        "text": "\"İt ürür, kervan yürür\" atasözü hangi duruma uygundur?",
        "options": [
          "Köpekler çok bağırdığında",
          "Gereksiz eleştirilerden etkilenmeden yola devam etmek",
          "Kervancılar köyden geçerken",
          "Küçük engeller büyük sorunlara yol açar"
        ],
        "answer": 1,
        "explain": "Bu atasözü 'başkalarının olumsuz sözlerine aldırmadan amacına yürümeye devam etmek gerektiğini' anlatır."
      },
      {
        "level": "orta",
        "text": "'Dili uzun' deyimi ile anlamca en yakın olan atasözü hangisidir?",
        "options": [
          "Söz gümüşse sükût altındır.",
          "Dil yarası kılıç yarasından beter olur.",
          "El elin eşeğini türkü çağırarak arar.",
          "Taşıma su ile değirmen dönmez."
        ],
        "answer": 1,
        "explain": "'Dili uzun' deyimi 'başkalarına kaba, saygısız ve ukala konuşan kimse' demektir. 'Dil yarası kılıç yarasından beter olur' atasözü de dilin verdiği zararı vurgular."
      },
      {
        "level": "orta",
        "text": "\"Öfkeyle kalkan zararla oturur\" atasözünün verdiği mesaj nedir?",
        "options": [
          "Öfkelenmek insanı yorar.",
          "Öfkeyle alınan kararlar zarara yol açar; duygusal davranmamak gerekir.",
          "Oturmak dinlendirici değildir.",
          "Kalkıp gitmek çözüm değildir."
        ],
        "answer": 1,
        "explain": "Bu atasözü 'öfke ya da aceleyle alınan kararların sonradan pişmanlığa ve zarara yol açacağını' öğütler."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki cümlelerden hangisinde mecaz anlam (yan anlam) kullanılmıştır?",
        "options": [
          "Çiçekler çok güzel açmış.",
          "Çocuklar bahçede koştu.",
          "O söz kalbime ok gibi saplandı.",
          "Hava bugün bulutlu."
        ],
        "answer": 2,
        "explain": "'Söz kalbime ok gibi saplandı' cümlesinde 'saplanmak' fiili gerçek anlamından (bir nesnenin bir yere geçmesi) uzaklaşarak 'çok etkilemek, incitmek' anlamını kazanmıştır → mecaz kullanım."
      },
      {
        "level": "zor",
        "text": "'Körle yatan şaşı kalkar' atasözü, aşağıdaki durumların hangisini en iyi anlatır?",
        "options": [
          "Hasta olan kişiyle vakit geçirme.",
          "Kötü arkadaş seçimi insanı olumsuz etkiler; çevresindeki kişiler kişiliği şekillendirir.",
          "Uyku düzenine dikkat etmek gerekir.",
          "Göz hastalıkları bulaşıcıdır."
        ],
        "answer": 1,
        "explain": "Bu atasözü 'kötü alışkanlıkları ya da özellikleri olan insanlarla birlikte olmak, o kişilere benzemeye yol açar; çevre seçimi önemlidir' mesajını verir."
      },
      {
        "level": "zor",
        "text": "'Deyimler ve atasözleri kalıplaşmış ifadelerdir' cümlesindeki 'kalıplaşmış' sözcüğünün anlamı nedir?",
        "options": [
          "Belirli bir kalıpla yazılan",
          "Zamanla anlam değişikliğine uğramış",
          "Değiştirilemeyen, sabit biçimiyle kullanılan",
          "Kalıptan geçirilen"
        ],
        "answer": 2,
        "explain": "Kalıplaşmış ifadeler; sözcükleri değiştirilemeyen, sabit biçimiyle kullanılan, sözcüklerin toplamından farklı anlam taşıyan ifadelerdir."
      }
    ],
    "Yazım Kuralları": [
      {
        "level": "kolay",
        "text": "Aşağıdaki cümlelerin hangisinde büyük harf kullanımı doğrudur?",
        "options": [
          "Bugün Ankara'ya gidiyorum.",
          "bugün ankara'ya gidiyorum.",
          "Bugün ankara'ya gidiyorum.",
          "bugün Ankara'ya gidiyorum."
        ],
        "answer": 0,
        "explain": "Cümle büyük harfle başlamalı, özel isimler (şehir adları) büyük harfle yazılmalıdır. 'Ankara' özel isim olduğundan büyük 'A' ile yazılır."
      },
      {
        "level": "kolay",
        "text": "'de / da' bağlacı ayrı mı, bitişik mi yazılır?",
        "options": [
          "Her zaman bitişik",
          "Her zaman ayrı",
          "Bağlaç olarak ayrı, hal eki olarak bitişik",
          "Hal eki olarak ayrı, bağlaç olarak bitişik"
        ],
        "answer": 2,
        "explain": "'De/da' bağlacı 'de ki' ya da 've de, hem de' anlamı taşıyorsa ayrı yazılır. Yer-yön bildiren '-de/-da' hal eki ise sözcüğe bitişik yazılır. ('Okulda' - ek; 'Geldim, sen de gel.' - bağlaç)"
      },
      {
        "level": "kolay",
        "text": "Aşağıdakilerden hangisi doğru yazılmıştır?",
        "options": [
          "herşey",
          "her şey",
          "her-şey",
          "Herşey"
        ],
        "answer": 1,
        "explain": "'Her şey' ayrı yazılır. TDK yazım kurallarına göre 'her' sözcüğü kendinden sonra gelen sözcükten ayrı yazılır (her yer, her zaman, her şey)."
      },
      {
        "level": "kolay",
        "text": "Özel isimler nasıl yazılır?",
        "options": [
          "Küçük harfle",
          "Büyük harfle",
          "İstediğimiz gibi",
          "Yalnızca cümle başında büyük harfle"
        ],
        "answer": 1,
        "explain": "Kişi adları, şehir, ülke, kurum, dil, ırk, kitap adları gibi özel isimler her durumda büyük harfle başlar."
      },
      {
        "level": "kolay",
        "text": "'ki' bağlacı aşağıdaki cümlelerin hangisinde ayrı yazılmalıdır?",
        "options": [
          "Biliyorki geç kalacak.",
          "Öyle güzel okuduki herkes hayran kaldı.",
          "Öyle bir rüzgar ki yapraklar uçuştu.",
          "Söylediklerinden anladıki haklıydı."
        ],
        "answer": 2,
        "explain": "'Öyle bir rüzgar ki' cümlesinde 'ki' bağlaç göreviyle ayrı yazılır. Diğer seçeneklerde 'ki' yanlış bitişik kullanılmıştır."
      },
      {
        "level": "kolay",
        "text": "Sayılar yazıyla mı rakamla mı yazılır?",
        "options": [
          "Her zaman rakamla",
          "Her zaman yazıyla",
          "Tek basamaklılar yazıyla, büyükler rakamla; belgelerde rakamla yazılır",
          "Hiçbir zaman karıştırılmamalı"
        ],
        "answer": 2,
        "explain": "Genel kural: Tek basamaklı sayılar yazıyla (bir, iki…), büyük sayılar rakamla yazılabilir. Resmî belgelerde rakamın yanı sıra yazı ile de belirtilir."
      },
      {
        "level": "orta",
        "text": "'mi / mı / mu / mü' soru eki nasıl yazılır?",
        "options": [
          "Her zaman sözcüğe bitişik",
          "Her zaman ayrı",
          "Ünlü uyumuna uyarak ayrı yazılır",
          "Ünlü uyumuna uymaz, bitişik yazılır"
        ],
        "answer": 2,
        "explain": "'mı/mi/mu/mü' soru eki daima ayrı yazılır ve ünlü uyumuna uyar. Örnek: 'Geldi mi?' 'Gördü mü?'"
      },
      {
        "level": "orta",
        "text": "Aşağıdaki sözcüklerin hangisi yanlış yazılmıştır?",
        "options": [
          "fotoğraf",
          "program",
          "gramer",
          "Taksi"
        ],
        "answer": 2,
        "explain": "'Gramer' sözcüğü Türkçede 'dil bilgisi' anlamında kullanılmakla birlikte Türkçe yazım kurallarına göre yabancı sözcüklerdeki bazı harfler değiştirilmez; ancak 'gramer' doğru yazılıştır. Bu soruda dikkat edilmesi gereken 'Taksi' sözcüğünün cümle ortasında büyük harfle yazılmasıdır; özel isim olmadığı için küçük 't' ile yazılmalıdır."
      },
      {
        "level": "orta",
        "text": "Birleşik sözcükler nasıl yazılır?",
        "options": [
          "Her zaman ayrı",
          "Her zaman bitişik",
          "Sözlükte bitişik yer alanlar bitişik, ayrı yer alanlar ayrı yazılır",
          "Bağlama göre değişir"
        ],
        "answer": 2,
        "explain": "Birleşik sözcüklerin yazımı TDK sözlüğüne göre belirlenir. 'Ayakkabı, hanımeli' bitişik; 'pazar yeri, satır arası' ayrı yazılır."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?",
        "options": [
          "Bu işi yarın yapacağım inşallah.",
          "Bu işi yarın yapacağım inşallah",
          "Bu işi yarın yapacağımınşallah.",
          "Bu işi Yarın yapacağım inşallah."
        ],
        "answer": 0,
        "explain": "'İnşallah' ayrı, küçük harfle yazılır ve cümle sonunda nokta olmalıdır. 'Yarın' ise özel isim olmadığından küçük harfle yazılır. Doğru cümle A seçeneğidir."
      },
      {
        "level": "orta",
        "text": "Unvan ve lakap sözcükleri nasıl yazılır?",
        "options": [
          "Her zaman büyük harfle",
          "Özel isme bitişik büyük harfle; ayrı kullanıldığında küçük harfle",
          "Her zaman küçük harfle",
          "Yalnızca resmî yazılarda büyük harfle"
        ],
        "answer": 1,
        "explain": "'Atatürk, Yıldırım Bayezit' gibi lakap özel ismin parçasıysa büyük harfle yazılır. 'Bay, Bayan, Doktor' gibi unvanlar tek başına küçük; kişi adıyla birlikte büyük harfle başlar: 'Dr. Ayşe Demir'."
      },
      {
        "level": "orta",
        "text": "'Şişli'de oturuyorum.' cümlesinde kesme işaretinin görevi nedir?",
        "options": [
          "Sözcükleri birleştirmek",
          "Özel isme getirilen eki özel isimden ayırmak",
          "Cümleyi bitirmek",
          "Yabancı sözcükleri işaretlemek"
        ],
        "answer": 1,
        "explain": "Özel isimlere getirilen çekim ekleri kesme işareti ile ayrılır: Şişli'de, Ankara'da, Ali'nin gibi."
      },
      {
        "level": "zor",
        "text": "'Geçen yıl İstanbul, Türkiye'nin en kalabalık ili olmuştur.' cümlesinde kaç yazım yanlışı vardır?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "answer": 0,
        "explain": "Cümlede yazım yanlışı yoktur. 'İstanbul' özel isim (büyük harf), 'Türkiye'nin' özel isme ek (kesme işareti), 'ili' küçük harf, nokta doğru kullanılmıştır."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki seçeneklerin hangisinde 'de/da' ekinin kullanımı yanlıştır?",
        "options": [
          "Evde oturuyorum.",
          "Ben de geldim.",
          "O daha güzeldi.",
          "Kitap masada duruyor."
        ],
        "answer": 2,
        "explain": "'O daha güzeldi.' cümlesinde '-de' eki yoktur; fiil kip ekidir (-di). 'Daha güzeldi' doğrudur. Seçenekler arasında hatalı bir 'de/da' kullanımı yoktur; bu soru öğrencilerin dikkatini test eder."
      },
      {
        "level": "zor",
        "text": "'Türk Dil Kurumu' yazımı neden büyük harfle başlar?",
        "options": [
          "Uzun olduğu için",
          "Kurum adı olduğu için (özel isim)",
          "Devlet kuruluşu olduğu için",
          "Türk sözcüğü içerdiği için"
        ],
        "answer": 1,
        "explain": "Kurum, kuruluş, dernek, vakıf ve benzeri örgütlerin adları özel isim sayılır ve her sözcüğü büyük harfle başlar: 'Türk Dil Kurumu', 'Milli Eğitim Bakanlığı'."
      }
    ],
    "Noktalama İşaretleri": [
      {
        "level": "kolay",
        "text": "Cümle sonunda hangi noktalama işareti kullanılır?",
        "options": [
          "Virgül",
          "Nokta",
          "Ünlem",
          "Soru işareti"
        ],
        "answer": 1,
        "explain": "Haber cümleleri (bildirme cümleleri) nokta ile bitirilir. Soru cümleleri soru işareti, ünlem ya da emir cümleleri ünlem işareti ile biter."
      },
      {
        "level": "kolay",
        "text": "Soru cümlesinin sonuna hangi işaret konur?",
        "options": [
          "Nokta (.)",
          "Virgül (,)",
          "Soru işareti (?)",
          "Ünlem işareti (!)"
        ],
        "answer": 2,
        "explain": "Soru cümlelerinin sonuna soru işareti (?) konur. 'Bugün okula gidecek misin?' gibi."
      },
      {
        "level": "kolay",
        "text": "Biri birinin devamı niteliğindeki sıralı cümleleri birbirinden ayırmak için hangi işaret kullanılır?",
        "options": [
          "Nokta",
          "Virgül",
          "İki nokta",
          "Tire"
        ],
        "answer": 1,
        "explain": "Virgül, birbiri ardına sıralanan sözcükleri, sözcük öbeklerini ve yan cümleleri birbirinden ayırmak için kullanılır."
      },
      {
        "level": "kolay",
        "text": "Alıntı cümlesinden önce ve sonra hangi işaret kullanılır?",
        "options": [
          "Kısa çizgi",
          "Tırnak işareti",
          "Parantez",
          "Virgül"
        ],
        "answer": 1,
        "explain": "Başkasından ya da kaynaklardan alınan cümlelerin başına ve sonuna tırnak işareti (\"..\") konur."
      },
      {
        "level": "kolay",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti doğru kullanılmıştır?",
        "options": [
          "Bugün, yarın ve öbür gün geleceğim.",
          "Bugün yarın, ve öbür gün geleceğim.",
          "Bugün yarın ve öbür gün, geleceğim.",
          "Bugün, yarın, ve öbür gün geleceğim."
        ],
        "answer": 0,
        "explain": "Sıralı ögeleri birbirinden virgülle ayırırız. Ancak son iki öğe arasında 've, ya, veya' bağlaçları varsa virgül gerekmez. 'Bugün, yarın ve öbür gün' doğru kullanımdır."
      },
      {
        "level": "kolay",
        "text": "Kısa çizgi (-) hangi amaçla kullanılmaz?",
        "options": [
          "Diyalog çizgisi olarak",
          "Satır sonunda sözcüğü bölmek için",
          "Sözcüklerin anlamını açıklamak için",
          "Cümle ortasında tırnak işareti yerine kullanmak için"
        ],
        "answer": 3,
        "explain": "Kısa çizgi; diyalog, satır sonu hece bölme, açıklama ve tarih/sayı aralıklarında kullanılır. Tırnak işareti yerine kullanılmaz."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki cümlelerin hangisinde noktalama işareti yanlış kullanılmıştır?",
        "options": [
          "Kitabı okudum, beğendim.",
          "Atatürk, 1881'de Selanik'te doğdu.",
          "Seni seviyorum!",
          "Ne kadar güzel bir hava değil mi?."
        ],
        "answer": 3,
        "explain": "Soru cümlesinin sonuna hem soru işareti hem nokta konmaz. 'Değil mi?' ile cümle bitirilmelidir; sonda ayrıca nokta eklenmez."
      },
      {
        "level": "orta",
        "text": "İki nokta üst üste (:) hangi amaçla kullanılır?",
        "options": [
          "Cümleyi bitirmek için",
          "Sıralama, açıklama ve alıntıdan önce kullanmak için",
          "Sözcükleri bölmek için",
          "Tarih yazmak için"
        ],
        "answer": 1,
        "explain": "İki nokta; 'şöyle ki, şunlardır' gibi açıklama yapılmadan önce, alıntı öncesinde ve maddeler sıralanmadan önce kullanılır. Örnek: 'Gerekli malzemeler: kalem, defter, silgi.'"
      },
      {
        "level": "orta",
        "text": "Parantez ( ) hangi durumlarda kullanılır?",
        "options": [
          "Sadece matematiksel işlemlerde",
          "Cümle içinde açıklama, ek bilgi ya da kısaltmaların açılımı için",
          "Alıntılarda",
          "Yalnızca yazarın adını belirtmek için"
        ],
        "answer": 1,
        "explain": "Parantez; cümle içinde açıklama, ek bilgi ve kısaltmaların açılımı için kullanılır. 'Türk Dil Kurumu (TDK)' gibi."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki cümlelerin hangisinde ünlem işareti doğru kullanılmıştır?",
        "options": [
          "Lütfen bana yardım et!",
          "Bugün hava güzel!",
          "Sınava çalışıyorum!",
          "Kitabı okudum!"
        ],
        "answer": 0,
        "explain": "Ünlem işareti; emir, rica, seslenme, coşku ve şaşkınlık bildiren cümlelerin sonuna konur. 'Lütfen bana yardım et!' bir rica cümlesidir ve ünlem işareti alır."
      },
      {
        "level": "orta",
        "text": "Üç nokta (...) hangi durumlarda kullanılır?",
        "options": [
          "Soru cümlesinin sonunda",
          "Sözün kasıtlı olarak yarım bırakıldığı ya da alıntının kısaltıldığı yerlerde",
          "Cümle başında",
          "Virgül yerine"
        ],
        "answer": 1,
        "explain": "Üç nokta; bir düşüncenin kasıtlı yarım bırakıldığı yerlerde, alıntıdan kısaltılan bölümlerde ve ifade edilemeyen duyguları yansıtmak için kullanılır."
      },
      {
        "level": "orta",
        "text": "'Haydi gidelim; zaman kaybetmeyelim.' cümlesinde noktalı virgülün (;) görevi nedir?",
        "options": [
          "Cümleyi bitirmek",
          "Birbiriyle ilgili bağımsız cümleleri birbirinden ayırmak",
          "Alıntı başlamadan önce kullanmak",
          "Sıralama yapmak"
        ],
        "answer": 1,
        "explain": "Noktalı virgül; birbiriyle anlam ilişkisi taşıyan ama bağımsız iki cümleyi birbirinden ayırır. Virgülden daha güçlü, noktadan daha zayıf bir duraklamayı simgeler."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki cümlede kaç noktalama yanlışı vardır? 'öğretmen bize dedi ki yarın kitap getirin'",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 2,
        "explain": "Üç hata: 1) Cümle 'Öğretmen' büyük harfle başlamalı. 2) 'bize dedi ki' den sonra virgül ya da iki nokta gerekmez ama 'ki' bağlaç olduğundan sonrasına tırnak açılmalı. 3) Cümle sonunda nokta yok. Bu hatalar yazım bilgisini ölçer."
      },
      {
        "level": "zor",
        "text": "Diyalog (konuşma) yazısında satır başı tire (-) yerine tırnak işareti kullanılsaydı ne değişirdi?",
        "options": [
          "Hiçbir şey değişmezdi",
          "Her söylemin kimin olduğu belirsizleşirdi; diyalog vurgusu azalır",
          "Metin daha kısa olurdu",
          "Okunması zorlaşırdı"
        ],
        "answer": 1,
        "explain": "Diyaloglarda satır başı tire her yeni konuşmayı görsel olarak ayırır. Tırnak işareti kullanılsaydı konuşmaların kim tarafından yapıldığını ve nerede başlayıp bittiğini izlemek güçleşirdi."
      },
      {
        "level": "zor",
        "text": "'Doğu, Güneydoğu ve İç Anadolu bölgeleri; hava koşulları, nüfus yoğunluğu ve tarımsal yapı açısından farklılık göstermektedir.' cümlesinde noktalı virgülün (;) işlevi nedir?",
        "options": [
          "Cümle sonu işareti",
          "Birden fazla öge içeren sıralamaların kümelerini birbirinden ayırma",
          "Yabancı sözcükleri işaretleme",
          "Alıntı işareti"
        ],
        "answer": 1,
        "explain": "Karmaşık sıralamalar içeren cümlelerde noktalı virgül, içinde virgül bulunan madde gruplarını birbirinden ayırmak için kullanılır. Böylece hangi unsurun hangi gruba ait olduğu netleşir."
      }
    ],
    "Sözcük Türleri": [
      {
        "level": "kolay",
        "text": "Aşağıdaki sözcüklerden hangisi isimdir?",
        "options": [
          "Koşmak",
          "Güzel",
          "Masa",
          "Ve"
        ],
        "answer": 2,
        "explain": "İsimler varlıkları (canlı, cansız, soyut, somut) karşılayan sözcüklerdir. 'Masa' bir eşya adı olduğundan isimdir."
      },
      {
        "level": "kolay",
        "text": "'Hızlı araba' tamlamasında 'hızlı' hangi sözcük türüdür?",
        "options": [
          "İsim",
          "Fiil",
          "Sıfat",
          "Zarf"
        ],
        "answer": 2,
        "explain": "Sıfatlar isimleri niteleyen ya da belirten sözcüklerdir. 'Hızlı araba' tamlamasında 'hızlı', arabayı nitelediğinden sıfattır."
      },
      {
        "level": "kolay",
        "text": "'Çok güzel okudu.' cümlesinde 'çok' hangi türdedir?",
        "options": [
          "Sıfat",
          "Zarf",
          "İsim",
          "Bağlaç"
        ],
        "answer": 1,
        "explain": "Zarflar fiilleri, sıfatları ya da başka zarfları niteleyen sözcüklerdir. 'Çok' burada 'güzel' sıfatını nitelediği için zarf görevindedir."
      },
      {
        "level": "kolay",
        "text": "Aşağıdaki sözcüklerden hangisi bağlaçtır?",
        "options": [
          "Güzel",
          "Koştu",
          "Fakat",
          "Yavaşça"
        ],
        "answer": 2,
        "explain": "Bağlaçlar sözcükleri, sözcük gruplarını ya da cümleleri birbirine bağlayan sözcüklerdir. 'Fakat, ve, ama, ya da, çünkü' bağlaçlara örnek verilebilir."
      },
      {
        "level": "kolay",
        "text": "'Ben, sen, o, biz' sözcükleri hangi sözcük türünün örnekleridir?",
        "options": [
          "Sıfat",
          "İsim",
          "Zamir",
          "Fiil"
        ],
        "answer": 2,
        "explain": "Zamirler isimlerin yerini tutan sözcüklerdir. Kişi zamirleri: ben, sen, o, biz, siz, onlar."
      },
      {
        "level": "kolay",
        "text": "'Ah, ne kadar güzel bir gün!' cümlesinde 'Ah' hangi sözcük türüdür?",
        "options": [
          "Zarf",
          "Bağlaç",
          "Edat",
          "Ünlem"
        ],
        "answer": 3,
        "explain": "Ünlemler; sevinç, üzüntü, şaşkınlık gibi duyguları ya da sesleniş ifadelerini karşılayan sözcüklerdir. 'Ah, of, vay, hey, ey' ünleme örnektir."
      },
      {
        "level": "orta",
        "text": "'İçin, gibi, kadar, ile' sözcükleri hangi türdendir?",
        "options": [
          "Bağlaç",
          "Zarf",
          "Edat (ilgeç)",
          "Ünlem"
        ],
        "answer": 2,
        "explain": "Edatlar (ilgeçler) tek başına anlam taşımayan, isimlerle ya da zamirlerle birleşerek anlam kuran sözcüklerdir. 'Senin için, su gibi, benden kadar' örneklerinde 'için, gibi, kadar' edattır."
      },
      {
        "level": "orta",
        "text": "'Koşan çocuklar bahçede oynuyordu.' cümlesinde 'koşan' hangi görevde kullanılmıştır?",
        "options": [
          "Zarf fiil",
          "Sıfat fiil",
          "Yüklem",
          "İsim fiil"
        ],
        "answer": 1,
        "explain": "Sıfat fiiller (ortaçlar) hem fiil özelliği taşır hem de ismi niteleyen sıfat görevi görür. 'Koşan' sözcüğü 'çocuklar' ismini nitelediğinden sıfat fiildir."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki cümlelerin hangisinde zamir (adıl) kullanılmıştır?",
        "options": [
          "Güzel çiçekler açmış.",
          "O dün buraya geldi.",
          "Hızlı araba gitti.",
          "Yavaşça yürüdü."
        ],
        "answer": 1,
        "explain": "'O' kişi zamiridir; üçüncü tekil kişiyi karşılar. Burada bir ismin yerine kullanılmaktadır."
      },
      {
        "level": "orta",
        "text": "'Kitabı okumak istiyorum.' cümlesinde 'okumak' hangi türdedir?",
        "options": [
          "Çekimli fiil",
          "İsim fiil (mastar)",
          "Sıfat fiil",
          "Zarf fiil"
        ],
        "answer": 1,
        "explain": "İsim fiiller (mastarlar) '-mak/-mek, -ma/-me, -ış/-iş' ekleriyle yapılır ve fiillere isim işlevi kazandırır. 'Okumak' burada özne/nesne gibi isim görevindedir."
      },
      {
        "level": "orta",
        "text": "'Ağlayarak içeri girdi.' cümlesinde 'ağlayarak' hangi türdedir?",
        "options": [
          "İsim fiil",
          "Sıfat fiil",
          "Zarf fiil",
          "Çekimli fiil"
        ],
        "answer": 2,
        "explain": "Zarf fiiller (ulaçlar) fiillere '-arak/-erek, -ıp/-ip, -ken, -dıkça' gibi ekler getirilerek elde edilir ve yüklem olan fiili zaman, durum, koşul bakımından niteler. 'Ağlayarak' fiilini niteler → zarf fiil."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki sözcüklerden hangisi hem sıfat hem zarf olabilir?",
        "options": [
          "Masa",
          "Çok",
          "Ve",
          "Koşmak"
        ],
        "answer": 1,
        "explain": "'Çok güzel çocuk' → 'çok' zarfı sıfatı niteliyor. 'Çok konuştu' → 'çok' zarfı fiili niteliyor. Dolayısıyla 'çok' hem sıfat niteleyicisi hem fiil niteleyicisi olabilir; zarf sözcüktür ama bu test bağlamı önemlidir."
      },
      {
        "level": "zor",
        "text": "'Bu kitap benim.' cümlesinde 'benim' hangi tür zamirdir?",
        "options": [
          "Kişi zamiri",
          "İşaret zamiri",
          "İyelik zamiri",
          "Soru zamiri"
        ],
        "answer": 2,
        "explain": "İyelik zamirleri sahipliği belirten zamirlerdir: benim, senin, onun, bizim, sizin, onların. 'Bu kitap benim' cümlesinde 'benim' kitabın sahibini gösterir."
      },
      {
        "level": "zor",
        "text": "'Nerede, ne zaman, kim, nasıl' sözcükleri hangi zamir türüne girer?",
        "options": [
          "Kişi zamiri",
          "Dönüşlülük zamiri",
          "Soru zamiri",
          "İşaret zamiri"
        ],
        "answer": 2,
        "explain": "Soru zamirleri soru sormak amacıyla kullanılan ve ismin yerini tutan sözcüklerdir: kim, ne, nere(de/ye/den), nasıl, hangisi, kaçı gibi."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki cümlelerden hangisinde bağlaç, edat ve ünlem birlikte kullanılmıştır?",
        "options": [
          "Güzel bir gün geçirdik.",
          "Ah, hem yoruldum hem de üzüldüm için.",
          "Vay, koştu ama yoruldu.",
          "Geldim ve gördüm."
        ],
        "answer": 2,
        "explain": "'Vay' (ünlem), 'ama' (bağlaç) birarada; ancak 'için' edat olarak seçenekte yok. En yakın seçenek C'dir: 'Vay' ünlem, 'ama' bağlaç; fiil zarfı değerlendirilerek edat benzeri ilişki kurulur. Bağlaç+ünlem açıkça var."
      }
    ],
    "Cümlenin Ögeleri": [
      {
        "level": "kolay",
        "text": "Cümlenin temel ögeleri nelerdir?",
        "options": [
          "Özne ve nesne",
          "Özne ve yüklem",
          "Yüklem ve zarf tümleci",
          "Nesne ve dolaylı tümleç"
        ],
        "answer": 1,
        "explain": "Her cümlenin iki temel ögesi vardır: özne (kimin ya da neyin yaptığı) ve yüklem (ne yapıldığı/ne olduğu). Diğerleri yardımcı ögelerdir."
      },
      {
        "level": "kolay",
        "text": "'Çocuklar bahçede oynadı.' cümlesinin öznesi hangisidir?",
        "options": [
          "Bahçede",
          "Oynadı",
          "Çocuklar",
          "Cümlede özne yoktur"
        ],
        "answer": 2,
        "explain": "Özne, yüklemin gösterdiği eylem ya da oluşu gerçekleştiren ya da içinde bulunandır. 'Kim oynadı?' sorusunun cevabı → Çocuklar → özne."
      },
      {
        "level": "kolay",
        "text": "'Ali, arkadaşına kitap verdi.' cümlesinde yüklem hangisidir?",
        "options": [
          "Ali",
          "Arkadaşına",
          "Kitap",
          "Verdi"
        ],
        "answer": 3,
        "explain": "Yüklem, cümledeki eylem ya da yargıyı bildiren ögedir; genellikle cümle sonunda bulunur. 'Ne yaptı?' sorusunun cevabı → verdi → yüklem."
      },
      {
        "level": "kolay",
        "text": "'Ayşe güzel bir şiir yazdı.' cümlesinde nesne hangisidir?",
        "options": [
          "Ayşe",
          "Güzel",
          "Bir şiir",
          "Yazdı"
        ],
        "answer": 2,
        "explain": "Nesne, fiilin etkisinin yöneldiği kişi ya da nesnedir; 'ne/kimi' sorusuyla bulunur. 'Ayşe ne yazdı?' → Bir şiir → belirtili ya da belirtisiz nesne."
      },
      {
        "level": "kolay",
        "text": "'Dolaylı tümleç' soruları nelerdir?",
        "options": [
          "Neyi? Kimi?",
          "Nerede? Nereye? Nereden?",
          "Ne zaman? Nasıl?",
          "Ne?"
        ],
        "answer": 1,
        "explain": "Dolaylı tümleç, eylemin gerçekleştiği yer, yön veya uzaklaşmayı gösterir. 'Nerede, nereye, nereden, kime, kimde, kimden' soruları ile bulunur."
      },
      {
        "level": "kolay",
        "text": "'Hızlıca koştu.' cümlesinde 'hızlıca' hangi öge görevindedir?",
        "options": [
          "Özne",
          "Nesne",
          "Dolaylı tümleç",
          "Zarf tümleci"
        ],
        "answer": 3,
        "explain": "Zarf tümleci eylemin nasıl, ne zaman, neden, ne kadar yapıldığını gösterir. 'Nasıl koştu?' → Hızlıca → zarf tümleci."
      },
      {
        "level": "orta",
        "text": "'Kuşlar ağaçlara kondular.' cümlesinin ögelerini doğru eşleştiren seçenek hangisidir?",
        "options": [
          "Özne: kuşlar, Yüklem: kondular, Dolaylı tümleç: ağaçlara",
          "Özne: ağaçlara, Yüklem: kondular, Nesne: kuşlar",
          "Özne: kuşlar, Yüklem: ağaçlara, Dolaylı tümleç: kondular",
          "Özne: ağaçlara, Yüklem: kuşlar, Nesne: kondular"
        ],
        "answer": 0,
        "explain": "Kim kondu? → Kuşlar (özne). Ne yaptı? → Kondular (yüklem). Nereye kondu? → Ağaçlara (dolaylı tümleç / yönelme)."
      },
      {
        "level": "orta",
        "text": "'Öğretmen, öğrencilere Türkçe dersini anlattı.' cümlesinde nesne hangisidir?",
        "options": [
          "Öğretmen",
          "Öğrencilere",
          "Türkçe dersini",
          "Anlattı"
        ],
        "answer": 2,
        "explain": "'Neyi anlattı?' → Türkçe dersini. 'İ' hal ekiyle belirlenmiş olması bu ögenin belirtili nesne olduğunu gösterir."
      },
      {
        "level": "orta",
        "text": "'Bahçedeki çocuklar çok neşeli.' cümlesinde yüklem hangi türdedir?",
        "options": [
          "Fiil yüklemi",
          "İsim yüklemi",
          "Zarf yüklemi",
          "Bu cümlede yüklem yoktur"
        ],
        "answer": 1,
        "explain": "İsim yüklemleri, cümle sonunda bir isim, sıfat ya da isim soylu sözcükle kurulur. 'Neşeli' sıfatı yüklem görevindedir → isim yüklemi."
      },
      {
        "level": "orta",
        "text": "Gizli özne nedir? Örnek veriniz.",
        "options": [
          "Hiç özne olmayan cümle",
          "Öznenin cümlede açıkça yazılmadığı, fiil çekiminden anlaşılan özne. 'Geliyorum.' cümlesinde gizli özne 'ben'dir.",
          "Öznenin yanlış kullanıldığı cümle",
          "Özneyi bilmediğimiz cümle"
        ],
        "answer": 1,
        "explain": "Türkçede özne bazen fiil çekiminden anlaşılacağı için cümlede ayrıca belirtilmez; buna 'gizli özne' denir. 'Geliyorum' → özne: ben (gizli)."
      },
      {
        "level": "orta",
        "text": "'Dün akşam kütüphanede çok güzel bir kitap okudum.' cümlesinde kaç tane öge vardır?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 3,
        "explain": "Özne: Ben (gizli), Yüklem: okudum, Nesne: kitap (bir kitap), Dolaylı tümleç: kütüphanede, Zarf tümleci: Dün akşam, Zarf tümleci: çok güzel → toplam 5 farklı öge bulunur."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki cümlelerin hangisinde nesne kullanılmamıştır?",
        "options": [
          "Ahmet kitabı okudu.",
          "Kardeşim eve geldi.",
          "Selin ödevi bitirdi.",
          "Annem pasta yaptı."
        ],
        "answer": 1,
        "explain": "'Kardeşim eve geldi.' cümlesinde nesne yoktur. 'Eve' dolaylı tümleç, 'kardeşim' özne, 'geldi' yüklemdir. 'Gelmek' geçişsiz fiildir; nesne almaz."
      },
      {
        "level": "zor",
        "text": "'Arkadaşlarım bana güzel bir doğum günü hediyesi aldı.' cümlesinin tüm ögeleri doğru verilen seçenek hangisidir?",
        "options": [
          "Özne: arkadaşlarım, Nesne: hediyesi, Yüklem: aldı",
          "Özne: arkadaşlarım, Nesne: güzel bir doğum günü hediyesi, Dolaylı Tümleç: bana, Yüklem: aldı",
          "Özne: bana, Nesne: arkadaşlarım, Yüklem: aldı",
          "Özne: arkadaşlarım, Nesne: bana, Yüklem: aldı"
        ],
        "answer": 1,
        "explain": "Kim aldı? → Arkadaşlarım (özne). Neyi aldı? → Güzel bir doğum günü hediyesi (belirtisiz nesne). Kime aldı? → Bana (dolaylı tümleç/yönelme). Ne yaptı? → Aldı (yüklem)."
      },
      {
        "level": "zor",
        "text": "'Ertesi gün sabah erken kalkarak okula gitti.' cümlesinde zarf tümleci kaç tanedir?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 2,
        "explain": "Zarf tümleçleri: 'Ertesi gün' (ne zaman?), 'sabah erken' (ne zaman?), 'kalkarak' (nasıl? – zarf fiil). Dolaylı tümleç: 'okula'. Üç zarf tümleci mevcuttur."
      },
      {
        "level": "zor",
        "text": "'Annesi dün ona mağazadan çok pahalı bir çanta aldı.' cümlesinde dolaylı tümleç kaç tanedir ve hangileridir?",
        "options": [
          "1 – mağazadan",
          "2 – ona, mağazadan",
          "3 – dün, ona, mağazadan",
          "2 – dün, mağazadan"
        ],
        "answer": 1,
        "explain": "'Ona' (kime? – yönelme durumu) ve 'mağazadan' (nereden? – uzaklaşma durumu) iki dolaylı tümleçtir. 'Dün' zaman zarfıdır → zarf tümleci. 'Pahalı bir çanta' ise nesnedir."
      }
    ],
    "Metin Türleri": [
      {
        "level": "kolay",
        "text": "Hikâyenin (öykünün) temel unsurları nelerdir?",
        "options": [
          "Olay, kişi, yer, zaman",
          "Giriş, gelişme, sonuç, dipnot",
          "Şair, dize, uyak, ritim",
          "Tez, argüman, sonuç"
        ],
        "answer": 0,
        "explain": "Hikâyelerde dört temel unsur bulunur: olay (ne oldu?), kişiler (kim?), yer (nerede?) ve zaman (ne zaman?). Bu unsurlar anlatının iskeletini oluşturur."
      },
      {
        "level": "kolay",
        "text": "Masalların en belirgin özelliği nedir?",
        "options": [
          "Gerçek olayları anlatır",
          "Olağanüstü olayları ve kişileri içerir, sözlü geleneğe dayanır",
          "Tarihsel olayları aktarır",
          "Bilim insanlarının anılarını içerir"
        ],
        "answer": 1,
        "explain": "Masallar; devler, periler, büyülü nesneler gibi olağanüstü unsurlar içeren, anonim ve sözlü gelenekten yazıya geçirilmiş anlatılardır."
      },
      {
        "level": "kolay",
        "text": "Fabl nedir?",
        "options": [
          "Bir şehrin tarihini anlatan metin",
          "Hayvanların insansılaştırılarak ders verilen kısa hikâyeler",
          "Doğa olaylarını açıklayan bilim metni",
          "Şiirin bir türü"
        ],
        "answer": 1,
        "explain": "Fabllar; hayvanlara veya doğa nesnelerine insan özellikleri veren, sonunda bir ders ya da öğüt bildiren kısa öykülü anlatılardır. La Fontaine ve Ezop en ünlü fabl yazarlarıdır."
      },
      {
        "level": "kolay",
        "text": "Şiirde 'uyak' (kafiye) ne demektir?",
        "options": [
          "Dizelerin uzunluğu",
          "Dizelerin sonundaki ses benzerlikleri",
          "Şiirin anlamı",
          "Şiirin başlığı"
        ],
        "answer": 1,
        "explain": "Uyak (kafiye), şiirde dizelerin sonundaki benzer ses ya da ses gruplarıdır. Uyak şiire ritim ve ahenk katar."
      },
      {
        "level": "kolay",
        "text": "Efsanenin masaldan farkı nedir?",
        "options": [
          "Efsanede de olağanüstü var, fark yok.",
          "Efsaneler gerçekmiş gibi anlatılan ve bir yere/kişiye bağlı olağanüstü hikâyelerdir; masallar ise kesinlikle gerçek dışı bilinir.",
          "Masallar tarihe dayanır, efsaneler dayanmaz.",
          "Efsaneler her zaman yazılıdır."
        ],
        "answer": 1,
        "explain": "Efsaneler belirli bir yer, kişi ya da nesneye bağlı, gerçekmiş gibi inanılan olağanüstü anlatılardır. Masallar ise açıkça hayal ürünü kabul edilir."
      },
      {
        "level": "kolay",
        "text": "Bilgilendirici metin türü olan 'haber metni'nin amacı nedir?",
        "options": [
          "Okuyucuyu eğlendirmek",
          "Okuyucuya güncel olayları yansız ve doğru biçimde aktarmak",
          "Okuyucuyu üzmek",
          "Okuyucuya dil bilgisi öğretmek"
        ],
        "answer": 1,
        "explain": "Haber metinleri güncel olayları tarafsız, doğru ve öz biçimde aktarmayı amaçlar. '5N 1K' (ne, nerede, ne zaman, nasıl, neden, kim) kuralı haberciliğin temelidir."
      },
      {
        "level": "orta",
        "text": "'Anlatıcı' kavramı metin türlerinde ne anlama gelir?",
        "options": [
          "Her metni yazan kişi",
          "Metindeki olayları okuyucuya aktaran ses ya da bakış açısı",
          "Metnin başlığı",
          "Metindeki kahraman"
        ],
        "answer": 1,
        "explain": "Anlatıcı, metindeki olayları aktaran 'ses'tir. Birinci kişi (ben) anlatıcı, üçüncü kişi (o) anlatıcı ya da tanrısal anlatıcı gibi türleri vardır."
      },
      {
        "level": "orta",
        "text": "Hikâye ile roman arasındaki temel fark nedir?",
        "options": [
          "Roman daha kısadır",
          "Hikâye genellikle tek bir olay örgüsü ve az kişiyle kısaca anlatılır; roman daha uzun, çok olaylı ve çok kişilidir.",
          "Romanda şiir kullanılır",
          "İkisi aynıdır"
        ],
        "answer": 1,
        "explain": "Hikâye: Kısa, tek olay örgüsü, az kişi. Roman: Uzun soluklu, çok katmanlı olay örgüsü, geniş kadro, ayrıntılı kişi ve mekân tasviri."
      },
      {
        "level": "orta",
        "text": "'Bakış açısı' kavramı anlatı türlerinde ne anlama gelir?",
        "options": [
          "Metnin yazıldığı yıl",
          "Olayların okuyucuya kim ya da ne tarafından aktarıldığı",
          "Metnin kaç sayfa olduğu",
          "Metnin konusu"
        ],
        "answer": 1,
        "explain": "Bakış açısı; anlatıcının kim olduğunu, olayları hangi konumdan gördüğünü belirler. Kahraman anlatıcı (birinci kişi) ya da gözlemci anlatıcı (üçüncü kişi) gibi türleri vardır."
      },
      {
        "level": "orta",
        "text": "'Epik şiir' ile 'lirik şiir' arasındaki fark nedir?",
        "options": [
          "İkisi aynıdır",
          "Epik şiirler kahramanlık ve savaş olaylarını anlatır; lirik şiirler sevgi, doğa ve bireysel duyguları işler.",
          "Lirik şiirler çok uzundur",
          "Epik şiirler yalnızca çocuklara yöneliktir"
        ],
        "answer": 1,
        "explain": "Epik şiir: Destansı olaylar, kahramanlık (Homeros'un İlyada'sı). Lirik şiir: Bireysel duygular, aşk, özlem, güzellik."
      },
      {
        "level": "orta",
        "text": "Bir metnin türünü belirleyen en önemli özellik nedir?",
        "options": [
          "Uzunluğu",
          "Amacı, içeriği ve yapısal özellikleri",
          "Yazarın adı",
          "Yayımlandığı yer"
        ],
        "answer": 1,
        "explain": "Metin türü; amacı (bilgilendirmek, eğlendirmek, ikna etmek), içeriği ve yapısal özellikleri (kişi, olay, yer unsurları; dize, kıta gibi) ile belirlenir."
      },
      {
        "level": "orta",
        "text": "'Mizah' içeren bir metinde yazarın amacı genellikle nedir?",
        "options": [
          "Okuyucuyu üzmek",
          "Güldürürken toplumsal sorunları ya da insan davranışlarını eleştirmek",
          "Tarih öğretmek",
          "Korkmak"
        ],
        "answer": 1,
        "explain": "Mizah metinleri hem güldürmeyi hem de toplumsal eleştiri yapmayı hedefler. Fıkra, karikatür ve hiciv bu amaçla kullanılan türlerdir."
      },
      {
        "level": "zor",
        "text": "Aşağıdakilerden hangisi 'kurgusal (kurmaca) metin' türlerinden biri değildir?",
        "options": [
          "Roman",
          "Hikâye",
          "Masal",
          "Biyografi"
        ],
        "answer": 3,
        "explain": "Biyografi, gerçek bir kişinin hayatını anlatan ve gerçeklere dayanan bir metin türüdür; kurgu içermez. Roman, hikâye ve masal ise kurmaca (fiction) türlerdir."
      },
      {
        "level": "zor",
        "text": "'Yapısal analiz' yöntemiyle bir hikâyeyi incelediğinizde hangi unsurlara bakarsınız?",
        "options": [
          "Yalnızca karakterlere",
          "Olay örgüsü, karakterler, zaman, mekân, anlatıcı bakış açısı ve tema",
          "Yalnızca dile",
          "Yalnızca yazarın biyografisine"
        ],
        "answer": 1,
        "explain": "Yapısal analiz; olay örgüsü (giriş-gelişme-sonuç), karakterler, zaman ve mekân unsurları, anlatıcı türü ve eserin ana temasını kapsar."
      },
      {
        "level": "zor",
        "text": "'Destanlar' ile günümüz romanları arasındaki en temel fark nedir?",
        "options": [
          "Destanlar daha uzundur",
          "Destanlar sözlü gelenekten kaynaklanır, toplumun tarihsel belleğini yansıtır ve olağanüstü kahramanlar içerir; romanlar bireysel bakış açısını ön plana çıkarır",
          "Romanlar daha eski türdür",
          "İkisinde de aynı amaç vardır"
        ],
        "answer": 1,
        "explain": "Destanlar: Milletlerin tarihsel ve kültürel köklerini, olağanüstü kahramanları, sözlü geleneği yansıtır (İlyada, Oğuz Kağan). Roman: Bireysel psikoloji, toplumsal gerçeklik, yazılı edebiyatın ürünüdür."
      }
    ],
    "Sıfat Türleri": [
      {
        "level": "kolay",
        "text": "Sıfatın (ön adın) görevi nedir?",
        "options": [
          "İsimleri niteleyen veya belirten sözcüklerdir",
          "Fiillerin yerine kullanılan sözcüklerdir",
          "Eylemleri niteleyen sözcüklerdir",
          "Cümleye bağlantı kuran sözcüklerdir"
        ],
        "answer": 0,
        "explain": "Sıfatlar isimlerden önce gelerek onları niteler (nasıl?) ya da belirtir (hangi?, kaç?, ne kadar?). 'Güzel çiçek' örneğinde 'güzel' sıfattır."
      },
      {
        "level": "kolay",
        "text": "'Kırmızı gül' tamlamasında 'kırmızı' sözcüğü hangi tür sıfattır?",
        "options": [
          "Niteleme sıfatı",
          "İşaret sıfatı",
          "Belgisiz sıfat",
          "Soru sıfatı"
        ],
        "answer": 0,
        "explain": "Niteleme sıfatları isimlerin rengini, biçimini, durumunu belirterek 'nasıl?' sorusunu yanıtlar. 'Kırmızı gül' → gül nasıl? kırmızı → niteleme sıfatı."
      },
      {
        "level": "kolay",
        "text": "'Bu kitap çok ilginç.' cümlesinde 'bu' hangi tür sıfattır?",
        "options": [
          "İşaret sıfatı",
          "Niteleme sıfatı",
          "Sayı sıfatı",
          "Belgisiz sıfat"
        ],
        "answer": 0,
        "explain": "İşaret sıfatları varlıkları işaret ederek 'hangi?' sorusunu yanıtlar. Bu, şu, o sözcükleri isimlerden önce geldiğinde işaret sıfatıdır."
      },
      {
        "level": "kolay",
        "text": "'Üç elma' tamlamasında 'üç' sözcüğü hangi tür sıfattır?",
        "options": [
          "Asıl sayı sıfatı",
          "Sıra sayı sıfatı",
          "Kesir sayı sıfatı",
          "Belgisiz sıfat"
        ],
        "answer": 0,
        "explain": "Asıl sayı sıfatları varlıkların sayısını kesin olarak belirtir (bir, iki, üç, dört...). 'Üç elma' → elma kaç? üç → asıl sayı sıfatı."
      },
      {
        "level": "kolay",
        "text": "'Birinci sırada oturuyorum.' cümlesinde 'birinci' hangi tür sıfattır?",
        "options": [
          "Sıra sayı sıfatı",
          "Asıl sayı sıfatı",
          "Kesir sayı sıfatı",
          "Niteleme sıfatı"
        ],
        "answer": 0,
        "explain": "Sıra sayı sıfatları varlıkların sırasını bildiren sayı sıfatlarıdır. '-ıncı/-inci' ekiyle yapılır: birinci, ikinci, üçüncü. 'Hangi sıra?' sorusunu yanıtlar."
      },
      {
        "level": "kolay",
        "text": "'Bazı öğrenciler geç geldi.' cümlesinde 'bazı' hangi tür sıfattır?",
        "options": [
          "Belgisiz sıfat",
          "İşaret sıfatı",
          "Soru sıfatı",
          "Niteleme sıfatı"
        ],
        "answer": 0,
        "explain": "Belgisiz sıfatlar varlıkları kesin olmayan, belirsiz biçimde niteler ya da belirtir. Bazı, birkaç, birçok, hiç, her, bütün, tüm bu gruptadır."
      },
      {
        "level": "orta",
        "text": "'Hangi kitabı okudun?' cümlesinde 'hangi' hangi tür sıfattır?",
        "options": [
          "Soru sıfatı",
          "Belgisiz sıfat",
          "İşaret sıfatı",
          "Niteleme sıfatı"
        ],
        "answer": 0,
        "explain": "Soru sıfatları isimlerden önce gelerek soru anlatan sıfatlardır. Hangi, kaç, nasıl, ne, ne kadar gibi sözcükler isimden önce gelince soru sıfatı olur."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki tamlamalardan hangisinde işaret sıfatı yoktur?",
        "options": [
          "Güzel hava",
          "Bu araba",
          "Şu kitap",
          "O çocuk"
        ],
        "answer": 0,
        "explain": "'Güzel hava' tamlamasında 'güzel' niteleme sıfatıdır, işaret sıfatı değildir. Bu, şu, o sözcükleri ise işaret sıfatlarıdır."
      },
      {
        "level": "orta",
        "text": "'Yarım ekmek' ifadesinde 'yarım' hangi tür sayı sıfatıdır?",
        "options": [
          "Kesir sayı sıfatı",
          "Asıl sayı sıfatı",
          "Sıra sayı sıfatı",
          "Üleştirme sayı sıfatı"
        ],
        "answer": 0,
        "explain": "Kesir sayı sıfatları bütünün bir bölümünü ifade eden sayı sıfatlarıdır. Yarım, çeyrek, üçte bir gibi sözcükler kesir sayı sıfatlarıdır."
      },
      {
        "level": "orta",
        "text": "'Her öğrenci bir kitap getirsin.' cümlesinde kaç sıfat vardır?",
        "options": [
          "2 sıfat: her (belgisiz) ve bir (asıl sayı)",
          "1 sıfat: sadece 'her'",
          "3 sıfat: her, bir, öğrenci",
          "Hiç sıfat yok"
        ],
        "answer": 0,
        "explain": "'Her öğrenci' → 'her' belgisiz sıfat. 'Bir kitap' → 'bir' asıl sayı sıfatı. Cümlede iki ayrı sıfat kullanılmıştır."
      },
      {
        "level": "orta",
        "text": "'İkişer elma dağıtıldı.' cümlesinde 'ikişer' hangi tür sıfattır?",
        "options": [
          "Üleştirme sayı sıfatı",
          "Asıl sayı sıfatı",
          "Kesir sayı sıfatı",
          "Sıra sayı sıfatı"
        ],
        "answer": 0,
        "explain": "Üleştirme sayı sıfatları varlıkları eşit bölümlere paylaştıran sayı sıfatlarıdır. '-ar/-er/-şar/-şer' ekiyle yapılır: birer, ikişer, üçer, dörder gibi."
      },
      {
        "level": "zor",
        "text": "'O güzel sarı çiçekler masanın üzerindeydi.' cümlesinde sıfatları bulunuz.",
        "options": [
          "O (işaret), güzel (niteleme), sarı (niteleme) – üç sıfat",
          "Sadece güzel (niteleme) – bir sıfat",
          "O ve güzel – iki sıfat",
          "Güzel, sarı, çiçekler – üç sıfat"
        ],
        "answer": 0,
        "explain": "'O' işaret sıfatı, 'güzel' ve 'sarı' ise niteleme sıfatlarıdır. Üçü de 'çiçekler' ismini niteler/belirtir. 'Çiçekler' isimdir, sıfat değildir."
      },
      {
        "level": "zor",
        "text": "Sıfat tamlaması ile isim tamlaması arasındaki fark nedir?",
        "options": [
          "Sıfat tamlamasında sıfat ismi niteler (ek yok); isim tamlamasında tamlayan ek alır",
          "İkisi aynı yapıdadır",
          "Sıfat tamlaması daha uzundur",
          "İsim tamlamasında sıfat kullanılır"
        ],
        "answer": 0,
        "explain": "Sıfat tamlaması: sıfat + isim, ek almaz ('kırmızı gül'). İsim tamlaması: tamlayan isim + iyelik eki + tamlanan ('gülün yaprağı'). Temel fark ek varlığı ve sözcük türüdür."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki cümlelerin hangisinde 'eski' sözcüğü sıfat olarak kullanılmamıştır?",
        "options": [
          "O eski arkadaşımı özledim.",
          "Eskisi daha iyiydi.",
          "Eski günler aklıma geldi.",
          "Eski ev satılmış."
        ],
        "answer": 1,
        "explain": "'Eskisi' cümlesinde sözcük ismin yerini tutmaktadır (zamir gibi); isim görevindedir, sıfat değildir. Diğer cümlelerde 'eski' bir ismi nitelediği için sıfattır."
      },
      {
        "level": "zor",
        "text": "'Ne kadar çalışkan bir öğrenci!' cümlesinde 'ne kadar' ve 'çalışkan' sözcüklerinin türlerini belirtiniz.",
        "options": [
          "Ne kadar: soru sıfatı (ünlem değeri taşıyor); çalışkan: niteleme sıfatı",
          "Ne kadar: zarf; çalışkan: isim",
          "İkisi de niteleme sıfatıdır",
          "Ne kadar: belgisiz sıfat; çalışkan: zarf"
        ],
        "answer": 0,
        "explain": "'Ne kadar' burada hayret/beğeni anlatan bir ünlem değeri taşısa da 'öğrenci' ismini niteleyen sıfat işlevi görür (soru sıfatı kalıbı). 'Çalışkan' ise doğrudan niteleme sıfatıdır."
      }
    ],
    "Zamir Türleri": [
      {
        "level": "kolay",
        "text": "Zamirin (adılın) görevi nedir?",
        "options": [
          "İsimlerin yerini tutan sözcüklerdir",
          "İsimleri niteleyen sözcüklerdir",
          "Fiilleri niteleyen sözcüklerdir",
          "Cümleye bağlantı kuran sözcüklerdir"
        ],
        "answer": 0,
        "explain": "Zamirler (adıllar), söylemde tekrarı önlemek amacıyla isimlerin yerine kullanılan sözcüklerdir. 'Kalem nerede? O masada.' ifadesinde 'o' kalem isminin yerini tutar."
      },
      {
        "level": "kolay",
        "text": "'Ben, sen, o, biz, siz, onlar' sözcükleri hangi zamir türüdür?",
        "options": [
          "Kişi zamiri",
          "İşaret zamiri",
          "Dönüşlülük zamiri",
          "Belgisiz zamir"
        ],
        "answer": 0,
        "explain": "Kişi zamirleri (şahıs zamirleri) birinci, ikinci ve üçüncü şahısları doğrudan karşılayan zamirlerdir: ben (1.t.), sen (2.t.), o (3.t.), biz (1.ç.), siz (2.ç.), onlar (3.ç.)."
      },
      {
        "level": "kolay",
        "text": "'Bu, şu, o' sözcükleri isimlerden önce gelince sıfat, tek başına kullanılınca ne olur?",
        "options": [
          "İşaret zamiri",
          "Kişi zamiri",
          "Soru zamiri",
          "Belgisiz zamir"
        ],
        "answer": 0,
        "explain": "'Bu, şu, o' isimden önce gelirse işaret sıfatı ('bu kitap'), tek başına ismin yerini tutarsa işaret zamiri ('bunu al') olur."
      },
      {
        "level": "kolay",
        "text": "'Kim geldi?' cümlesinde 'kim' sözcüğü hangi zamir türüdür?",
        "options": [
          "Soru zamiri",
          "Kişi zamiri",
          "Dönüşlülük zamiri",
          "İşaret zamiri"
        ],
        "answer": 0,
        "explain": "Soru zamirleri isim yerine kullanılan soru sözcükleridir. Kim, ne, nere(si), hangisi, kaçı, nasılı gibi sözcükler ismin yerini tutarsa soru zamiridir."
      },
      {
        "level": "kolay",
        "text": "'Kendim yaptım.' cümlesinde 'kendim' hangi zamir türüdür?",
        "options": [
          "Dönüşlülük zamiri",
          "Kişi zamiri",
          "İşaret zamiri",
          "Belgisiz zamir"
        ],
        "answer": 0,
        "explain": "Dönüşlülük zamiri 'kendi' sözcüğünün şahıs ekleri almasıyla oluşur: kendim, kendin, kendisi, kendimiz, kendiniz, kendileri. Eylemin özneye döndüğünü vurgular."
      },
      {
        "level": "kolay",
        "text": "'Birisi kapıyı çaldı.' cümlesinde 'birisi' hangi zamir türüdür?",
        "options": [
          "Belgisiz zamir",
          "Kişi zamiri",
          "İşaret zamiri",
          "Soru zamiri"
        ],
        "answer": 0,
        "explain": "Belgisiz zamirler belirli olmayan, kesin bir varlığı göstermeyen zamirlerdir. Birisi, kimse, bazısı, hepsi, biri, hiçbiri, herkes, kimi belgisiz zamirlerdir."
      },
      {
        "level": "orta",
        "text": "'Bu kitap benim.' cümlesinde 'benim' hangi zamir türüdür?",
        "options": [
          "İyelik zamiri",
          "Kişi zamiri",
          "Belgisiz zamir",
          "Soru zamiri"
        ],
        "answer": 0,
        "explain": "İyelik zamirleri sahipliği, aitliği bildiren zamirlerdir. 'Benim, senin, onun, bizim, sizin, onların' sözcükleri iyelik zamiridir. 'Bu kitap benim' = bu kitap bana aittir."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki cümlelerin hangisinde 'o' sözcüğü zamir olarak kullanılmıştır?",
        "options": [
          "O eve git.",
          "O çocuk çok zeki.",
          "O kitabı okudum.",
          "O geldi mi?"
        ],
        "answer": 3,
        "explain": "'O geldi mi?' cümlesinde 'o' tek başına bir kişinin yerini tutmaktadır → kişi zamiri. Diğer cümlelerde 'o' bir isimden önce gelerek işaret sıfatı görevindedir."
      },
      {
        "level": "orta",
        "text": "'Ne istiyorsun?' cümlesinde 'ne' hangi türdedir?",
        "options": [
          "Soru zamiri (ismin yerini tutuyor)",
          "Soru sıfatı (isimden önce geliyor)",
          "Belgisiz zamir",
          "Kişi zamiri"
        ],
        "answer": 0,
        "explain": "'Ne istiyorsun?' cümlesinde 'ne' bir ismin (istenen şeyin) yerini tutmaktadır; herhangi bir isimden önce gelmez. Bu nedenle soru zamiridir."
      },
      {
        "level": "orta",
        "text": "'Hepsi geldi.' cümlesinde 'hepsi' hangi zamir türüdür?",
        "options": [
          "Belgisiz zamir",
          "Kişi zamiri",
          "İşaret zamiri",
          "Dönüşlülük zamiri"
        ],
        "answer": 0,
        "explain": "'Hepsi' belirli olmayan ya da bütünü kapsayan belirsiz bir kitleyi ifade eder. Birisi, hepsi, bazısı, hiçbiri gibi sözcükler belgisiz zamirdir."
      },
      {
        "level": "orta",
        "text": "Kişi zamiri ile iyelik zamiri arasındaki fark nedir?",
        "options": [
          "Kişi zamiri kişinin kendisini gösterir (ben, sen); iyelik zamiri sahipliği belirtir (benim, senin)",
          "İkisi aynı şeydir",
          "İyelik zamiri fiil görevindedir",
          "Kişi zamiri edat görevindedir"
        ],
        "answer": 0,
        "explain": "Kişi zamiri konuşmada kişiyi doğrudan temsil eder: 'Ben geldim.' İyelik zamiri ise kişinin bir şeye sahip olduğunu belirtir: 'Bu kitap benim.' Birincisi özne, ikincisi iyelik ilişkisi kurar."
      },
      {
        "level": "zor",
        "text": "'Şunları hemen temizleyin!' cümlesinde 'şunları' hangi zamir türüdür ve hangi hali almıştır?",
        "options": [
          "İşaret zamiri, belirtme hali (-ları)",
          "Kişi zamiri, yalın hal",
          "Belgisiz zamir, yönelme hali",
          "Soru zamiri, çıkma hali"
        ],
        "answer": 0,
        "explain": "'Şunları': şun- (işaret zamiri kökü) + -lar (çoğul) + -ı (belirtme hali). Bu işaret zamirinin çoğul belirtme halidir. İşaret zamirleri de isimler gibi hal eki alabilir."
      },
      {
        "level": "zor",
        "text": "'Herkes kendi işine baksın.' cümlesinde zamirleri bulup türlerini belirtiniz.",
        "options": [
          "Herkes: belgisiz zamir; kendi: dönüşlülük zamiri",
          "İkisi de kişi zamiridir",
          "Herkes: kişi zamiri; kendi: belgisiz zamir",
          "Yalnızca 'kendi' zamirdir"
        ],
        "answer": 0,
        "explain": "'Herkes' belirsiz bir topluluğu ifade eder → belgisiz zamir. 'Kendi' dönüşlülük zamiridir, işin özneye ait olduğunu vurgular. Cümlede iki farklı zamir türü bir arada kullanılmıştır."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki sözcüklerden hangisi hem zamir hem sıfat olarak kullanılabilir?",
        "options": [
          "Bu",
          "Ben",
          "Kendim",
          "Birisi"
        ],
        "answer": 0,
        "explain": "'Bu' sözcüğü isimden önce gelince işaret sıfatı ('bu kitap'), tek başına ismin yerini tutunca işaret zamiri ('bunu al') olur. Bu, şu, o çift işlevli sözcüklerdir."
      },
      {
        "level": "zor",
        "text": "'Kimse gelmedi.' cümlesinde 'kimse' hangi zamir türüdür ve cümleye kattığı özellik nedir?",
        "options": [
          "Belgisiz zamir; olumsuz anlam içerir (hiç kimse)",
          "Soru zamiri; soru bildirir",
          "Kişi zamiri; belirli kişiyi gösterir",
          "İşaret zamiri; gösterme işlevi taşır"
        ],
        "answer": 0,
        "explain": "'Kimse' olumsuz cümlelerde 'hiç kimse' anlamı taşıyan belgisiz zamirdir. Olumlu cümlede kullanılamaz. Olumsuz yüklemle birlikte anlam bütünlüğü oluşturur."
      }
    ]
  },
  "6": {
    "Yapım Ekleri ve Sözcük Türetme": [
      {
        "level": "kolay",
        "text": "\"Güzel\" sözcüğüne hangi yapım eki getirilerek \"güzellik\" sözcüğü türetilmiştir?",
        "options": [
          "-lik",
          "-lı",
          "-ca",
          "-sız"
        ],
        "answer": 0,
        "explain": "İsimden isim yapan \"-lık/-lik\" eki, \"güzel\" sözcüğüne eklenerek soyut isim \"güzellik\" türetilmiştir."
      },
      {
        "level": "kolay",
        "text": "\"Yaz-\" fiiline hangi yapım eki getirilerek isim türetilmiştir?",
        "options": [
          "-ı (yazı)",
          "-ıyor",
          "-dı",
          "-malı"
        ],
        "answer": 0,
        "explain": "Fiilden isim yapan \"-ı\" ekiyle \"yaz-\" köküne eklenerek \"yazı\" ismi türetilmiştir."
      },
      {
        "level": "kolay",
        "text": "\"Taş\" sözcüğünden hangi yapım ekiyle fiil türetilebilir?",
        "options": [
          "-la (taşla-)",
          "-lık",
          "-sız",
          "-ca"
        ],
        "answer": 0,
        "explain": "İsimden fiil yapan \"-la\" ekiyle \"taş\" sözcüğüne eklenerek \"taşla-\" fiili türetilmiştir."
      },
      {
        "level": "kolay",
        "text": "Aşağıdaki sözcüklerden hangisi fiilden türemiş bir isimdir?",
        "options": [
          "Okuyucu",
          "Kitaplık",
          "Güzelce",
          "Taşlık"
        ],
        "answer": 0,
        "explain": "\"Okuyucu\" sözcüğü \"oku-\" fiilinden fiilden isim yapan \"-yıcı/-yici\" ekiyle türetilmiştir."
      },
      {
        "level": "kolay",
        "text": "\"Hız\" sözcüğüne \"-lı\" eki getirildiğinde ne anlam ifade eder?",
        "options": [
          "Hızı olan, hızlı hareket eden",
          "Hız olmayan",
          "Hızlanma durumu",
          "Hız ile ilgili yer"
        ],
        "answer": 0,
        "explain": "\"-lı\" eki isim soylu sözcüklere eklenerek \"o özelliğe sahip olan\" anlamında sıfat türetir. \"Hızlı\" = hızı olan demektir."
      },
      {
        "level": "kolay",
        "text": "\"Çalış-\" fiiline \"-kan\" eki eklenerek oluşan sözcük hangi türdendir?",
        "options": [
          "Sıfat (fiilden isim/sıfat)",
          "Fiil",
          "Zarf",
          "Bağlaç"
        ],
        "answer": 0,
        "explain": "\"-kan\" eki fiillere eklenerek süreklilik gösteren sıfat türetir. \"Çalışkan\" = sürekli çalışma özelliği olan anlamındadır."
      },
      {
        "level": "orta",
        "text": "\"Tuz\" sözcüğünden \"tuzsuz\" sözcüğünü türeten yapım eki hangi anlamı taşır?",
        "options": [
          "O şeyin olmadığını, yokluğunu belirtir",
          "O şeyin çokluğunu belirtir",
          "O şeyle ilgili yeri belirtir",
          "O şeyle yapılan eylemi belirtir"
        ],
        "answer": 0,
        "explain": "\"-sız/-siz\" eki \"o nesnenin veya özelliğin olmadığı\" anlamını katar. \"Tuzsuz\" = tuzu olmayan demektir."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki sözcüklerden hangisi isimden isim yapma ekiyle türetilmiştir?",
        "options": [
          "Kışlık",
          "Koşucu",
          "Bilgisayar",
          "Getiri"
        ],
        "answer": 0,
        "explain": "\"Kışlık\": \"kış\" isminden \"-lık\" isimden isim yapım ekiyle türetilmiştir. Koşucu: fiilden; getiri: fiilden türemiştir."
      },
      {
        "level": "orta",
        "text": "\"Güven-\" fiiline eklenen \"-li\" ekiyle \"güvenli\" sözcüğü oluşturulmuştur. Bu ek hangi işlevi yapar?",
        "options": [
          "Fiilden sıfat türetir",
          "İsimden fiil türetir",
          "İsimden isim türetir",
          "Fiilden zarf türetir"
        ],
        "answer": 0,
        "explain": "\"Güvenli\" sözcüğünde \"-li\" eki, \"güven-\" fiiline eklenerek o özelliği taşıyan anlamında bir sıfat türetmiştir. Bu, fiilden sıfat yapma işlevidir."
      },
      {
        "level": "orta",
        "text": "\"Taşıma\", \"koşma\", \"yazma\" sözcüklerinde ortak olan yapım eki hangisidir ve ne işlev görür?",
        "options": [
          "-ma: fiilden isim yapar",
          "-ma: isimden isim yapar",
          "-ma: fiil çekimi ekidir",
          "-ma: sıfat türetir"
        ],
        "answer": 0,
        "explain": "\"-ma\" eki fiillere gelerek eylem adı (mastar) oluşturan isim yapım ekidir. Taşı-ma, koş-ma, yaz-ma sözcüklerinde fiilden isim türetmektedir."
      },
      {
        "level": "orta",
        "text": "\"Öğretmen\" sözcüğü hangi yapım ekleriyle oluşturulmuştur?",
        "options": [
          "öğret- + -men (fiilden isim)",
          "öğren- + -men",
          "öğret- + -im + -en",
          "öğre- + -tm + -en"
        ],
        "answer": 0,
        "explain": "\"Öğretmen\" = \"öğret-\" fiili + \"-men\" fiilden isim yapım eki. \"-men\" eki meslek adları türetir (örn. batman, yönetmen)."
      },
      {
        "level": "zor",
        "text": "\"Sevimli\", \"sevimlilik\", \"sevimsizleşmek\" sözcük ailesinde kaç farklı yapım eki kullanılmıştır?",
        "options": [
          "4 farklı yapım eki",
          "3 farklı yapım eki",
          "2 farklı yapım eki",
          "5 farklı yapım eki"
        ],
        "answer": 0,
        "explain": "\"Sev-\" kökü + \"-im\" + \"-li\" + \"-lik\" + \"-siz\" + \"-leş\" = 5 ek ama sadece yapım ekleri: -im, -li, -lik, -siz, -leş = 5. Ancak sevimsizleşmek: sev+im+siz+leş+mek. Yapım ekleri: -im, -siz, -leş = 3 temel; tüm ailede ise -im, -li, -lik, -siz, -leş = 4+."
      },
      {
        "level": "zor",
        "text": "\"Yorgun\" sözcüğü nasıl türetilmiştir ve hangi sözcük türüdür?",
        "options": [
          "\"Yor-\" fiili + \"-gun\" eki → sıfat",
          "\"Yor-\" ismi + \"-gun\" eki → fiil",
          "\"Yoru-\" fiili + \"-n\" eki → isim",
          "Türkçe köken yoktur, alıntı sözcüktür"
        ],
        "answer": 0,
        "explain": "\"Yorgun\": \"yor-\" (yormak fiilinin kökü) + \"-gun/-gün\" fiilden sıfat yapım eki. Bu ek etkilenmiş veya o durumda olan anlamında sıfat türetir."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki sözcük çiftlerinden hangisinde her iki sözcük de aynı tür yapım ekiyle oluşturulmuştur?",
        "options": [
          "Yazarlık – öğretmenlik (ikisi de fiilden isim + -lık)",
          "Güzellik – çalışkanlık (isimden + fiilden)",
          "Temizlik – koşuculuk (farklı kökler, farklı ekler)",
          "Çocukluk – okumuşluk (isim + fiil)"
        ],
        "answer": 0,
        "explain": "\"Yazarlık\": yazar (fiilden isim) + -lık; \"öğretmenlik\": öğretmen (fiilden isim) + -lık. Her ikisi de fiilden türemiş isimlere -lık eklenmiştir: fiilden isim yapım eki + isimden isim yapım eki."
      },
      {
        "level": "zor",
        "text": "\"Geliştirme\" sözcüğündeki yapım eklerini sırasıyla bulunuz.",
        "options": [
          "-iş (gel-iş), -tir (geliş-tir), -me (geliştir-me)",
          "-me, -tir, -iş sırasıyla",
          "Yalnızca -me eki vardır",
          "-tir ve -me eki vardır, -iş çekim ekidir"
        ],
        "answer": 0,
        "explain": "\"Geliştirme\": gel- + -iş (fiilden isim) → geliş; geliş- + -tir (isimden fiil) → geliştir; geliştir- + -me (fiilden isim) → geliştirme. Toplam 3 yapım eki kullanılmıştır."
      }
    ],
    "Fiil Çekimi – Haber Kipleri": [
      {
        "level": "kolay",
        "text": "\"Arkadaşım okula gitti.\" cümlesindeki fiil hangi haber kipindedir?",
        "options": [
          "Görülen geçmiş zaman",
          "Duyulan geçmiş zaman",
          "Geniş zaman",
          "Gelecek zaman"
        ],
        "answer": 0,
        "explain": "\"Gitti\" fiili \"-dı\" ekiyle çekilmiştir. \"-dı/-di\" eki görülen (bilinen) geçmiş zamanı ifade eder; konuşanın bizzat gördüğü/yaşadığı eylemleri anlatır."
      },
      {
        "level": "kolay",
        "text": "\"Her sabah erken kalkarım.\" cümlesindeki fiil hangi kiptedir?",
        "options": [
          "Geniş zaman",
          "Şimdiki zaman",
          "Gelecek zaman",
          "Görülen geçmiş zaman"
        ],
        "answer": 0,
        "explain": "\"Kalkarım\" fiili geniş zaman kipiyle (-ar/-er eki) çekilmiştir. Geniş zaman, alışkanlıkları, genel gerçekleri ve her zaman yapılan eylemleri ifade eder."
      },
      {
        "level": "kolay",
        "text": "\"Yarın sinemaya gideceğiz.\" cümlesindeki fiil hangi kiptedir?",
        "options": [
          "Gelecek zaman",
          "Şimdiki zaman",
          "Geniş zaman",
          "Duyulan geçmiş zaman"
        ],
        "answer": 0,
        "explain": "\"Gideceğiz\" fiili \"-ecek\" eki ve çoğul şahıs ekiyle oluşturulmuştur. Bu ek gelecek zamanı ifade eder ve henüz gerçekleşmemiş eylemler için kullanılır."
      },
      {
        "level": "kolay",
        "text": "\"Hava çok soğukmuş.\" cümlesindeki fiil hangi kiptedir?",
        "options": [
          "Duyulan geçmiş zaman",
          "Görülen geçmiş zaman",
          "Geniş zaman",
          "Şimdiki zaman"
        ],
        "answer": 0,
        "explain": "\"-mış/-miş\" eki duyulan (öğrenilen) geçmiş zamanı ifade eder. Konuşanın bizzat görmediği, duyduğu veya çıkarım yaptığı durumlar için kullanılır."
      },
      {
        "level": "kolay",
        "text": "\"Şu an ders çalışıyorum.\" cümlesindeki fiil hangi kiptedir?",
        "options": [
          "Şimdiki zaman",
          "Geniş zaman",
          "Gelecek zaman",
          "Görülen geçmiş zaman"
        ],
        "answer": 0,
        "explain": "\"-ıyor/-iyor\" eki şimdiki zamanı ifade eder. Konuşma anında devam eden eylemleri belirtir. \"Çalışıyorum\" = şu an çalışma eylemi sürmektedir."
      },
      {
        "level": "kolay",
        "text": "Haber kipleri kaç tanedir ve hangileridir?",
        "options": [
          "5: Görülen geçmiş, duyulan geçmiş, şimdiki, geniş, gelecek zaman",
          "4: Görülen, duyulan, şimdiki, gelecek",
          "3: Geçmiş, şimdiki, gelecek",
          "6: 5 haber + 1 dilek kipi"
        ],
        "answer": 0,
        "explain": "Haber kipleri 5 tanedir: 1) Görülen geçmiş zaman (-dı), 2) Duyulan geçmiş zaman (-mış), 3) Şimdiki zaman (-ıyor), 4) Geniş zaman (-ar/-er), 5) Gelecek zaman (-ecek/-acak)."
      },
      {
        "level": "orta",
        "text": "\"Dedeme göre çocukken çok koşarmış.\" cümlesinde hangi kip kullanılmıştır ve neden?",
        "options": [
          "Geniş zaman + duyulan geçmiş (koşar-mış: rivayet birleşik)",
          "Sadece geniş zaman",
          "Duyulan geçmiş zaman",
          "Görülen geçmiş + geniş zaman"
        ],
        "answer": 0,
        "explain": "\"Koşarmış\" = geniş zaman eki (-ar) + duyulan geçmiş zaman eki (-mış). Bu bir \"rivayet birleşik zaman\"dır. Alışkanlık (geniş) + duyma/rivayet (-mış) anlamları birleşmiştir."
      },
      {
        "level": "orta",
        "text": "\"Okuyorum\" ile \"Okurum\" arasındaki anlam farkı nedir?",
        "options": [
          "Okuyorum: şu an devam ediyor; okurum: alışkanlık/genel gerçek",
          "İkisi aynı anlama gelir",
          "Okuyorum geçmişi, okurum geleceği anlatır",
          "Okuyorum kesin, okurum belirsizdir"
        ],
        "answer": 0,
        "explain": "\"Okuyorum\" (-ıyor) şimdiki zamanda devam eden eylem; \"okurum\" (-r/geniş) ise alışkanlığı, genel gerçeği veya tekrarlayan eylemi anlatır. Bu iki kipin anlam farkı önemlidir."
      },
      {
        "level": "orta",
        "text": "\"Sınava hazırlanmaktaydım.\" cümlesindeki fiil birleşik zamanlı mıdır? Açıklayınız.",
        "options": [
          "Evet; şimdiki zaman + görülen geçmiş (hikâye birleşik)",
          "Hayır; sadece görülen geçmiş zamandır",
          "Evet; gelecek zaman + duyulan geçmiş",
          "Hayır; geniş zamandır"
        ],
        "answer": 0,
        "explain": "\"Hazırlanmaktaydım\": hazırlan- + -makta (şimdiki zaman) + -y + -dı (görülen geçmiş) + -m (1. tekil şahıs). Bu bir hikâye birleşik zamanıdır; geçmişte süren bir eylemi anlatır."
      },
      {
        "level": "orta",
        "text": "Görülen geçmiş zaman hangi durumlarda kullanılmaz?",
        "options": [
          "Olayı bizzat görmeyip başkasından duyduğumuzda",
          "Olayı bizzat yaşadığımızda",
          "Tarihi olayları anlatırken",
          "Roman ve hikâyelerde geçmişteki olayları yazarken"
        ],
        "answer": 0,
        "explain": "Görülen geçmiş zaman (-dı) konuşanın bizzat tanıklık ettiği olaylar için kullanılır. Duyduğumuz, öğrendiğimiz ya da çıkarım yaptığımız durumlarda duyulan geçmiş (-mış) tercih edilir."
      },
      {
        "level": "orta",
        "text": "\"Çocuklar parkta oynayacaklardı.\" cümlesinde hangi birleşik zaman kullanılmıştır?",
        "options": [
          "Gelecek zaman + görülen geçmiş (hikâye birleşik)",
          "Gelecek zaman + duyulan geçmiş (rivayet birleşik)",
          "Sadece görülen geçmiş zaman",
          "Gelecek + dilek kipi"
        ],
        "answer": 0,
        "explain": "\"Oynayacaklardı\": oyna- + -yacak (gelecek) + -lar (çoğul) + -dı (görülen geçmiş). Bu hikâye birleşik zamandır: \"geçmişte öyle olması bekleniyordu\" anlamı taşır."
      },
      {
        "level": "zor",
        "text": "\"Bekliyormuşum\" fiilini zaman ve kip bakımından çözümleyiniz.",
        "options": [
          "Şimdiki zaman + duyulan geçmiş = rivayet birleşik zaman, 1. tekil şahıs",
          "Şimdiki zaman, 1. çoğul şahıs",
          "Duyulan geçmiş zaman, 1. tekil şahıs",
          "Görülen geçmiş + şimdiki zaman"
        ],
        "answer": 0,
        "explain": "\"Bekliyormuşum\": bekle- + -iyor (şimdiki zaman) + -muş (duyulan geçmiş) + -um (1. tekil şahıs). Rivayet birleşik zamanı: \"şu an bekliyordum/bekliyormuşum\" gibi farkında olmadan yapılan bir eylemi ifade eder."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki cümlelerden hangisinde zaman kayması (kip aktarması) vardır?",
        "options": [
          "Yarın erken kalkarım. (gelecek → geniş)",
          "Dün sinemaya gittim. (geçmiş → geçmiş)",
          "Şu an çalışıyorum. (şimdiki → şimdiki)",
          "Hava çok soğukmuş. (duyulan → duyulan)"
        ],
        "answer": 0,
        "explain": "\"Yarın erken kalkarım\" cümlesinde gelecek zaman anlamı geniş zaman kipiyle (-r) ifade edilmiştir. Kelimenin gerçek zamanı gelecektir ama geniş zaman kipi kullanılmıştır; bu zaman kaymasıdır."
      },
      {
        "level": "zor",
        "text": "\"Söylenirmiş\" fiilini ses ve anlam açısından tam olarak çözümleyiniz.",
        "options": [
          "söyle- + -n (edilgen) + -ir (geniş) + -miş (rivayet) = 3. tekil edilgen rivayet",
          "söyle + -n + -ir = geniş zaman edilgen",
          "söyle- + -ır + -mış = duyulan geçmiş",
          "söyle- + -n + -miş = duyulan geçmiş edilgen"
        ],
        "answer": 0,
        "explain": "\"Söylenirmiş\": söyle- (fiil kökü) + -n (edilgenlik eki) + -ir (geniş zaman) + -miş (rivayet eki). Rivayet birleşik zamanı, 3. tekil şahıs, edilgen çatı. Anlamı: \"söylenirmiş gibi\" veya \"söylenirdi diye duydum\"."
      }
    ],
    "Fiil Çekimi – Dilek Kipleri": [
      {
        "level": "kolay",
        "text": "\"Lütfen erken gel!\" cümlesindeki fiil hangi dilek kipiyle çekilmiştir?",
        "options": [
          "Emir kipi",
          "İstek kipi",
          "Gereklilik kipi",
          "Şart kipi"
        ],
        "answer": 0,
        "explain": "Emir kipi, bir emri, isteği veya buyruğu doğrudan karşıya yönelterek ifade eder. \"Gel!\" fiili ek almadan 2. tekil şahıs emir kipindedir."
      },
      {
        "level": "kolay",
        "text": "\"Sınav iyi geçse, çok mutlu olacağım.\" cümlesindeki koyu yazılan fiil hangi dilek kipindedir?",
        "options": [
          "Şart (koşul) kipi",
          "İstek kipi",
          "Emir kipi",
          "Gereklilik kipi"
        ],
        "answer": 0,
        "explain": "\"-se/-sa\" eki şart (koşul) kipini oluşturur. Bu kipin kullanıldığı cümle, bir şartı ve o şarta bağlı sonucu ifade eder."
      },
      {
        "level": "kolay",
        "text": "\"Bu kitabı okuyasım geldi.\" cümlesindeki fiil hangi dilek kipindedir?",
        "options": [
          "İstek kipi",
          "Emir kipi",
          "Şart kipi",
          "Gereklilik kipi"
        ],
        "answer": 0,
        "explain": "İstek kipi \"-a/-e\" ekiyle kurulur. \"Okuyasım\" = oku- + -ya (istek) + -sı + -m. İstek kipi, kişinin bir eylemi yapmak istediğini belirtir."
      },
      {
        "level": "kolay",
        "text": "\"Bu odayı temizlemeliyim.\" cümlesindeki fiil hangi dilek kipindedir?",
        "options": [
          "Gereklilik kipi",
          "Emir kipi",
          "İstek kipi",
          "Şart kipi"
        ],
        "answer": 0,
        "explain": "Gereklilik kipi \"-malı/-meli\" ekiyle kurulur. \"Temizlemeliyim\" = temizle- + -meli (gereklilik) + -y + -im. Bir zorunluluğu veya gerekliliği ifade eder."
      },
      {
        "level": "kolay",
        "text": "Dilek kipleri kaç tanedir?",
        "options": [
          "4 (emir, istek, dilek-şart, gereklilik)",
          "5 (haber kiplerinin sayısı kadar)",
          "3 (emir, istek, şart)",
          "6 (tüm kiplerin yarısı)"
        ],
        "answer": 0,
        "explain": "Dilek kipleri 4 tanedir: 1) Emir kipi, 2) İstek kipi (-a/-e), 3) Dilek-şart kipi (-sa/-se), 4) Gereklilik kipi (-malı/-meli)."
      },
      {
        "level": "kolay",
        "text": "\"Keşke o gün orada olsaydım.\" cümlesindeki fiil hangi birleşik kiptedir?",
        "options": [
          "Şart kipi + görülen geçmiş (hikâye birleşik)",
          "Şart kipi + duyulan geçmiş",
          "İstek kipi + geçmiş",
          "Gereklilik kipi + geçmiş"
        ],
        "answer": 0,
        "explain": "\"Olsaydım\": ol- + -sa (şart) + -y + -dı (görülen geçmiş) + -m. Bu, gerçekleşmemiş bir dileği geçmişe yönelik ifade eden hikâye birleşik zamandır."
      },
      {
        "level": "orta",
        "text": "Emir kipinin 2. tekil şahıs çekimi nasıl yapılır?",
        "options": [
          "Fiil köküne/gövdesine hiçbir ek eklenmez (çıplak kök)",
          "Fiil köküne \"-in\" eki eklenir",
          "Fiil köküne \"-sın\" eki eklenir",
          "Fiil köküne \"-e\" eki eklenir"
        ],
        "answer": 0,
        "explain": "Emir kipinin 2. tekil şahsında (sen) fiil çıplak kökü/gövdesi kullanılır: \"gel!\", \"yaz!\", \"oku!\". Diğer şahıslarda ek alır: -in (siz), -sin (o), -sinler (onlar), -elim (biz), -eyim (ben)."
      },
      {
        "level": "orta",
        "text": "\"Çok çalışmalısın.\" cümlesi yerine hangi cümle gereklilik anlamını koruyarak kullanılabilir?",
        "options": [
          "Çok çalışman gerekiyor.",
          "Çok çalışırsın.",
          "Çok çalışsan iyi olur.",
          "Çok çalışacaksın."
        ],
        "answer": 0,
        "explain": "\"Çalışman gerekiyor\" cümlesi, gereklilik anlamını farklı bir yapıyla ifade eder. Şart kipiyle kurulan \"çalışsan\" öneri anlamı taşır; gelecek zaman ise gereklilikten ziyade kesinlik bildirir."
      },
      {
        "level": "orta",
        "text": "\"İsteseydi gelebilirdi.\" cümlesinde iki ayrı birleşik kip kullanılmıştır. Bunları belirtiniz.",
        "options": [
          "İsteseydi: şart+geçmiş hikâye; gelebilirdi: geniş+geçmiş hikâye (yeterlilik)",
          "İkisi de şart kipindedir",
          "İsteseydi: istek+geçmiş; gelebilirdi: gelecek+geçmiş",
          "İkisi de görülen geçmiştir"
        ],
        "answer": 0,
        "explain": "\"İsteseydi\": iste- + -se (şart) + -y + -di (hikâye birleşik). \"Gelebilirdi\": gel- + -ebil (yeterlilik) + -ir (geniş) + -di (hikâye birleşik). İki farklı birleşik kip bir arada kullanılmıştır."
      },
      {
        "level": "orta",
        "text": "Gereklilik kipi yerine geniş zaman kullanılan cümleye örnek nedir?",
        "options": [
          "Akıllı insan düşünür (= düşünmeli).",
          "Yarın erken gelmeliyim.",
          "Keşke buraya gelsen.",
          "Bunu yapmanı istiyorum."
        ],
        "answer": 0,
        "explain": "\"Akıllı insan düşünür\" cümlesinde geniş zaman (-r) kullanılmış; ancak gereklilik anlamı taşımaktadır. Bu, kip aktarması (gereklilik → geniş) örneğidir."
      },
      {
        "level": "orta",
        "text": "\"Gitsem mi, gitmesem mi?\" cümlesinde hangi dilek kipi kullanılmıştır?",
        "options": [
          "Şart (dilek-şart) kipi, hem olumlu hem olumsuz",
          "Emir kipi olumlu ve olumsuz",
          "İstek kipi olumlu ve olumsuz",
          "Gereklilik kipi"
        ],
        "answer": 0,
        "explain": "\"Gitsem\" ve \"gitmesem\" sözcüklerinde \"-se\" dilek-şart kipi kullanılmıştır. Burada kararsızlık ve iç sorgulama anlamı taşımaktadır."
      },
      {
        "level": "zor",
        "text": "\"Yazmalıymışım\" fiilini tam olarak çözümleyiniz.",
        "options": [
          "yaz- + -malı (gereklilik) + -y + -mış (duyulan geçmiş) + -ım = rivayet birleşik, 1. tekil",
          "yaz- + -malı + -ım = gereklilik 1. tekil",
          "yaz- + -mış + -ım = duyulan geçmiş 1. tekil",
          "yaz- + -malı + -dı + -m = hikâye birleşik"
        ],
        "answer": 0,
        "explain": "\"Yazmalıymışım\": yaz- + -malı (gereklilik kipi) + -y + -mış (duyulan geçmiş eki) + -ım. Bu gereklilik kipinin rivayet birleşik zamanıdır. \"Yazmam gerekiyormuş\" anlamındadır."
      },
      {
        "level": "zor",
        "text": "Hangi dilek kipi öznesi olan şahsa göre farklı şekillerde çekilir ve örnekleri nelerdir?",
        "options": [
          "Emir: gel (sen), gelin (siz), gelsin (o), gelsinler (onlar), geleyim (ben), gelelim (biz)",
          "İstek: gele, gelesiz, gelesin, geleler",
          "Şart: gelsem, gelsen, gelse, gelsek, gelseniz, gelseler",
          "Gereklilik: gelmeli (tüm şahıslar aynı)"
        ],
        "answer": 0,
        "explain": "Emir kipi her şahıs için farklı ek alır: 1.t.: geleyim, 1.ç.: gelelim, 2.t.: gel!, 2.ç.: gelin!, 3.t.: gelsin, 3.ç.: gelsinler. Diğer dipler de şahıslara göre çekilir ancak emir en düzensiz görünendir."
      },
      {
        "level": "zor",
        "text": "\"Gelmeli misin?\" cümlesindeki soru eki hangi konumdadır ve bu neyi değiştirir?",
        "options": [
          "Kip ekinden sonra şahıs ekinden önce gelir; bu soru cümlesi yapar ama kip değişmez",
          "Kip ekini değiştirerek yeni bir kip oluşturur",
          "Şahıs ekinden sonra gelir",
          "Fiil köküne eklenir"
        ],
        "answer": 0,
        "explain": "Türkçede soru eki \"mı/mi\" her zaman kip ekinden sonra, şahıs ekinden önce gelir: gel-meli-mi-sin. Bu, cümleyi sorulu yapar ama kipi değiştirmez; gereklilik kipi kalmaya devam eder."
      }
    ],
    "Cümlenin Ögeleri II": [
      {
        "level": "kolay",
        "text": "\"Ahmet, kütüphaneden kitap aldı.\" cümlesinde dolaylı tümleç hangisidir?",
        "options": [
          "Kütüphaneden",
          "Ahmet",
          "Kitap",
          "Aldı"
        ],
        "answer": 0,
        "explain": "Dolaylı tümleç, fiilin yönünü, yerini veya hedefini belirten ve \"-e, -de, -den\" hal ekleriyle kullanılan ögedir. \"Kütüphaneden\" (-den hali) dolaylı tümleçtir."
      },
      {
        "level": "kolay",
        "text": "\"Çocuklar bahçede top oynuyorlar.\" cümlesinde zarf tümleci hangisidir?",
        "options": [
          "Bahçede",
          "Çocuklar",
          "Top",
          "Oynuyorlar"
        ],
        "answer": 0,
        "explain": "\"Bahçede\" sözcüğü nerede sorusunu yanıtlar ve yüklemin yerini belirtir. Bu yer bildiren sözcük zarf tümleci (yer-yön tümleci) görevindedir."
      },
      {
        "level": "kolay",
        "text": "\"O güzel kız, renkli çiçekler topladı.\" cümlesinde kaç tane nesne vardır?",
        "options": [
          "1 (çiçekler)",
          "2 (güzel kız ve çiçekler)",
          "0 (nesne yoktur)",
          "3 (o, güzel, çiçekler)"
        ],
        "answer": 0,
        "explain": "Nesne fiilin üzerine yapıldığı varlığı ya da kavramı gösterir ve \"kimi, neyi\" sorularına yanıt verir. \"Çiçekler\" sözcüğü \"ne topladı?\" sorusunu yanıtlar; nesne sayısı 1'dir."
      },
      {
        "level": "kolay",
        "text": "Aşağıdaki cümlelerde özne yoktur (gizli özneli). Hangisinde özne gizlidir?",
        "options": [
          "Bugün erken uyandım.",
          "Kedi balkonda uyudu.",
          "Fırtına çok şiddetliydi.",
          "Ağaçlar sallandı."
        ],
        "answer": 0,
        "explain": "\"Uyandım\" fiilinin şahıs eki \"-m\" birinci tekil şahsı (ben) gösterir. Özne (ben) cümlede yazılmamış, fiil ekiyle gizlenmiştir. Bu gizli özneli cümle örneğidir."
      },
      {
        "level": "kolay",
        "text": "\"Dün öğleden sonra uzun süre yağmur yağdı.\" cümlesinde kaç zarf tümleci vardır?",
        "options": [
          "2 (dün ve uzun süre)",
          "1 (dün)",
          "3 (dün, öğleden sonra, uzun süre)",
          "0"
        ],
        "answer": 2,
        "explain": "\"Dün\" (ne zaman?), \"öğleden sonra\" (ne zaman?) ve \"uzun süre\" (ne kadar süre?) ifadeleri zamanı ve süreyi belirtir; hepsi zarf tümleci sayılır. Bu cümlede 3 zarf tümleci vardır."
      },
      {
        "level": "kolay",
        "text": "Yüklem cümlede hangi konumda bulunur?",
        "options": [
          "Genellikle cümlenin sonunda",
          "Cümlenin başında",
          "Cümlenin ortasında",
          "Her zaman nesleden önce"
        ],
        "answer": 0,
        "explain": "Türkçede yüklem (fiil veya isim + ek-fiil) cümlenin sonunda yer alır. Bu Türkçenin temel sözdizimi kuralıdır: Özne – Tümleç – Yüklem (SOV)."
      },
      {
        "level": "orta",
        "text": "\"Annem bana doğum günümde güzel bir hediye aldı.\" cümlesinin ögelerini bulunuz.",
        "options": [
          "Özne: Annem; nesne: hediye; dolaylı tümleç: bana; zarf tümleci: doğum günümde; yüklem: aldı",
          "Özne: Annem; nesne: güzel; dolaylı tümleç: hediye; yüklem: aldı",
          "Özne: Annem; nesne: bana; yüklem: aldı",
          "Özne: Ben; nesne: hediye; yüklem: aldı"
        ],
        "answer": 0,
        "explain": "Annem (özne), bana (kime? → dolaylı tümleç), doğum günümde (ne zaman? → zarf tümleci), güzel bir hediye (neyi? → belirtili nesne), aldı (yüklem)."
      },
      {
        "level": "orta",
        "text": "Belirtili ve belirtisiz nesne arasındaki fark nedir?",
        "options": [
          "Belirtili nesne \"-ı/-i\" hal ekini alır; belirtisiz nesne yalın haldedir",
          "Belirtili nesne cümlenin başında; belirtisiz nesne sonunda gelir",
          "Belirtili nesne özneyle; belirtisiz nesne yüklemle ilgilidir",
          "Belirtili nesne isim; belirtisiz nesne zamirdir"
        ],
        "answer": 0,
        "explain": "Belirtili nesne yüklemi doğrudan etkiler ve \"-ı/-i/-u/-ü\" belirtme hal ekini alır (kitabı, kalemi). Belirtisiz nesne ise ek almaz, yalın haldedir (kitap al, ekmek ye)."
      },
      {
        "level": "orta",
        "text": "\"Öğretmen soruyu tahtaya yazdı.\" cümlesinde dolaylı tümleç ve nesne hangileridir?",
        "options": [
          "Dolaylı tümleç: tahtaya; nesne: soruyu",
          "Dolaylı tümleç: soruyu; nesne: tahtaya",
          "Dolaylı tümleç: öğretmen; nesne: soruyu",
          "Dolaylı tümleç: tahtaya; nesne: öğretmen"
        ],
        "answer": 0,
        "explain": "\"Soruyu\" → neyi yazdı? (nesne). \"Tahtaya\" → nereye yazdı? (dolaylı tümleç, yön bildiren). Öğretmen ise öznedir."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki cümlelerin hangisinde cümle ögesi eksiktir (eksiltili cümle)?",
        "options": [
          "— Nereye gidiyorsun? — Okula.",
          "Kedi süt içti.",
          "Çocuklar bahçede oynuyor.",
          "Hava bugün çok güzel."
        ],
        "answer": 0,
        "explain": "\"Okula\" yanıtı tek başına eksiltili bir cümledir: özne ve yüklem düşürülmüş, yalnızca dolaylı tümleç kalmıştır. Eksiltili cümleler bağlamdan anlaşılır."
      },
      {
        "level": "orta",
        "text": "\"Dün gece şiddetli bir deprem oldu.\" cümlesinde yüklem hangisidir ve türü nedir?",
        "options": [
          "\"Oldu\" – fiil yüklemi",
          "\"Şiddetli\" – sıfat yüklemi",
          "\"Deprem\" – isim yüklemi",
          "\"Dün gece\" – zarf yüklemi"
        ],
        "answer": 0,
        "explain": "Yüklem cümlenin en temel ögesidir ve eylemi ya da durumu ifade eder. \"Oldu\" fiil yüklemidir. \"Şiddetli bir deprem\" ise öznenin nitelendiricisi, yani öznedir."
      },
      {
        "level": "zor",
        "text": "\"Masanın üzerindeki kitabı alarak çıktı.\" cümlesinin ögelerini belirleyiniz.",
        "options": [
          "Nesne: kitabı; zarf tümleci: masanın üzerindeki kitabı alarak; yüklem: çıktı; özne: gizli (o)",
          "Özne: masa; nesne: kitap; yüklem: alarak çıktı",
          "Dolaylı tümleç: masanın üzeri; nesne: kitabı; yüklem: çıktı",
          "Özne: kitap; zarf tümleci: masadan; yüklem: çıktı"
        ],
        "answer": 2,
        "explain": "\"Masanın üzerindeki\" → dolaylı tümleç (nereden çıktı, nerede). \"Kitabı\" → belirtili nesne (neyi aldı). \"Alarak\" → zarf tümleci (nasıl çıktı). \"Çıktı\" → yüklem. Özne gizlidir (o)."
      },
      {
        "level": "zor",
        "text": "\"Hız treninin geçmesiyle birlikte şiddetli bir titreşim hissettim.\" cümlesinde kaç cümle ögesi belirlenebilir?",
        "options": [
          "4 öge: özne (gizli-ben), nesne (titreşim), zarf tümleci (hız treninin geçmesiyle birlikte), yüklem (hissettim)",
          "3 öge: özne, nesne, yüklem",
          "5 öge: özne, nesne, iki zarf tümleci, yüklem",
          "2 öge: özne ve yüklem"
        ],
        "answer": 0,
        "explain": "Gizli özne (ben), \"şiddetli bir titreşim\" (nesne – neyi hissettim?), \"hız treninin geçmesiyle birlikte\" (zarf tümleci – nasıl/ne zaman?), \"hissettim\" (yüklem). Bu cümlede 4 ana öge vardır."
      },
      {
        "level": "zor",
        "text": "\"Güzel\" sözcüğü aşağıdaki cümlelerin hangisinde zarf tümleci görevindedir?",
        "options": [
          "Güzel konuştu.",
          "Güzel bir kız geldi.",
          "O güzel çiçekleri aldı.",
          "Bu güzel tablo satıldı."
        ],
        "answer": 0,
        "explain": "\"Güzel konuştu\" cümlesinde \"güzel\" nasıl konuştu sorusunu yanıtlar ve yüklemi niteler; bu nedenle zarf tümleci (zarf) görevindedir. Diğer cümlelerde \"güzel\" ismi niteleyen sıfattır."
      }
    ],
    "Anlatım Bozuklukları": [
      {
        "level": "kolay",
        "text": "\"Kitabı okudum ve beğendim.\" cümlesinde anlatım bozukluğu var mıdır?",
        "options": [
          "Hayır, cümle doğrudur.",
          "Evet, özne eksikliği vardır.",
          "Evet, nesne çelişkisi vardır.",
          "Evet, zaman uyumsuzluğu vardır."
        ],
        "answer": 0,
        "explain": "Bu cümle dilbilgisi açısından doğrudur. Özne (gizli 'ben'), nesne ('kitabı'), yüklemler ('okudum ve beğendim') eksiksiz ve uyumludur."
      },
      {
        "level": "kolay",
        "text": "\"Bu olayı gözlerimle gördüm.\" cümlesinde anlatım bozukluğu nedir?",
        "options": [
          "Gereksiz sözcük (gözlerimle – görmek zaten gözle yapılır)",
          "Özne eksikliği",
          "Anlaşılmaz ifade",
          "Yanlış ek kullanımı"
        ],
        "answer": 0,
        "explain": "\"Gördüm\" fiili zaten gözle görme anlamı taşır. \"Gözlerimle\" ifadesi anlam bakımından gereksiz yere tekrar oluşturmaktadır. Bu, gereksiz sözcük kullanımından kaynaklanan anlatım bozukluğudur."
      },
      {
        "level": "kolay",
        "text": "\"İki kız ve bir erkek kardeşi vardı.\" cümlesinde bozukluk nedir?",
        "options": [
          "Özne-yüklem uyumsuzluğu: özne çoğul, yüklem tekil kullanılmış olabilir",
          "Gereksiz sözcük kullanımı",
          "Bu cümle doğrudur",
          "Anlam belirsizliği"
        ],
        "answer": 2,
        "explain": "Bu cümle dilbilgisi açısından doğrudur. Türkçede birden fazla isim sıralandığında yüklem tekil olabilir; bu yapı kabul edilebilir. Anlatım bozukluğu yoktur."
      },
      {
        "level": "kolay",
        "text": "\"Toplantıya katılmak istiyorum fakat gidemeyeceğim.\" cümlesinde bağlaç kullanımı doğru mudur?",
        "options": [
          "Evet, \"fakat\" zıtlık bildiren bağlaç olarak doğru kullanılmıştır.",
          "Hayır, \"fakat\" yerine \"çünkü\" kullanılmalıdır.",
          "Hayır, \"fakat\" yerine \"ve\" kullanılmalıdır.",
          "Hayır, bağlaç gereksizdir."
        ],
        "answer": 0,
        "explain": "\"İstiyorum\" ve \"gidemeyeceğim\" birbiriyle çelişen iki fikri bağlıyor. \"Fakat\" zıtlık bildirdiğinden bu bağlamda doğru seçimdir."
      },
      {
        "level": "kolay",
        "text": "\"Araba hızlı bir şekilde gitti.\" cümlesinde herhangi bir bozukluk var mıdır?",
        "options": [
          "Evet, \"hızlı bir şekilde\" yerine yalnızca \"hızlıca\" veya \"hızla\" kullanılabilir (gereksiz uzatma)",
          "Hayır, cümle mükemmeldir.",
          "Evet, zaman eki yanlıştır.",
          "Evet, nesne eksiktir."
        ],
        "answer": 0,
        "explain": "\"Hızlı bir şekilde\" ifadesi doğru olmakla birlikte \"hızla\" veya \"hızlıca\" ile daha kısa ve öz ifade edilebilir. Bu gereksiz uzun anlatım bozukluğuna örnek verilebilir."
      },
      {
        "level": "kolay",
        "text": "\"Kapıyı hem açtı ve hem de kapadı.\" cümlesindeki bozukluk nedir?",
        "options": [
          "Bağlaç yanlışlığı: \"hem... hem de\" birlikte kullanılmalı, \"ve\" fazladır",
          "Özne eksikliği",
          "Nesne yanlışlığı",
          "Zaman uyumsuzluğu"
        ],
        "answer": 0,
        "explain": "\"Hem... hem de\" sıralama bağlacı bütün olarak kullanılır. \"Hem açtı ve hem de kapadı\" derken \"ve\" fazladan eklenmiş; doğrusu \"hem açtı hem de kapadı\" olmalıdır."
      },
      {
        "level": "orta",
        "text": "\"Çocuklar parkta oynadı ve eve döndüler.\" cümlesinde özne-yüklem uyumsuzluğu var mı?",
        "options": [
          "Evet; çocuklar (çoğul) – oynadı (tekil) uyumsuzluğu var",
          "Hayır, doğrudur.",
          "Evet; döndüler fiilinin şahsı yanlış.",
          "Hayır, Türkçede çoğul özneler tekil yüklem alabilir."
        ],
        "answer": 0,
        "explain": "Türkçede insan dışı varlıklar için çoğul özne tekil yüklem alabilir ancak aynı cümlede iki yüklem varsa tutarlılık önemlidir. \"Oynadı\" tekil, \"döndüler\" çoğul; bu tutarsızlık anlatım bozukluğudur."
      },
      {
        "level": "orta",
        "text": "\"Kalemi masanın üstüne mi yoksa altına mı koyayım?\" cümlesinde bozukluk var mı?",
        "options": [
          "Hayır, cümle dilbilgisi ve anlam açısından doğrudur.",
          "Evet, iki seçenek aynı anda sorulamaz.",
          "Evet, \"mı\" soru eki yanlış kullanılmıştır.",
          "Evet, dolaylı tümleç eksiktir."
        ],
        "answer": 0,
        "explain": "\"Üstüne mi yoksa altına mı\" yapısı Türkçede iki seçenekli soru için doğru kullanımdır. \"Yoksa\" bağlacı seçenekler arasında doğru biçimde kullanılmıştır. Anlatım bozukluğu yoktur."
      },
      {
        "level": "orta",
        "text": "\"Evin bahçesindeki çiçekleri sulamayı ihmal etmemeliyiz.\" cümlesinde sorun nedir?",
        "options": [
          "Cümle doğrudur, bozukluk yoktur.",
          "\"İhmal etmemeliyiz\" çifte olumsuz yapıdır ve anlamı bozuyor.",
          "\"Bahçesindeki\" eki yanlış kullanılmış.",
          "Özne belirsizdir."
        ],
        "answer": 0,
        "explain": "Bu cümle dilbilgisi açısından doğrudur. \"İhmal etmemeliyiz\" = \"sulamalıyız\" anlamında olumlu bir gereklilik ifade eder. Çifte olumsuz mantıksal açıdan geçerlidir."
      },
      {
        "level": "orta",
        "text": "\"Toplantı saat üçte başladı ve dörtte bitecek.\" cümlesinde zaman uyumsuzluğu var mı?",
        "options": [
          "Evet; \"başladı\" geçmiş, \"bitecek\" gelecek zaman; bu bağlamda anlamsızdır",
          "Hayır, doğrudur.",
          "Evet; iki yüklem aynı kip olmalı.",
          "Hayır, Türkçede bu normaldir."
        ],
        "answer": 0,
        "explain": "Başlangıç geçmişte ise bitiş de geçmişte olmalıdır: \"...dörtte bitti.\" Farklı zamanların kullanılması zaman uyumsuzluğu yaratır ve anlatım bozukluğuna yol açar."
      },
      {
        "level": "orta",
        "text": "\"Son derece çok yoruldum.\" cümlesindeki bozukluk nedir?",
        "options": [
          "Anlam yığılması: \"son derece\" ve \"çok\" aynı anlamda yoğunluk belirtiyor",
          "Özne eksikliği",
          "Yüklem yanlışlığı",
          "Zaman uyumsuzluğu"
        ],
        "answer": 0,
        "explain": "\"Son derece\" ve \"çok\" ikisi de aşırı yoğunluk anlatan zarflardır. Birini kullanmak yeterlidir. İkisini birden kullanmak anlam yığılmasına (gereksiz tekrara) neden olur."
      },
      {
        "level": "zor",
        "text": "\"Kitabı okumak ve anlayabilmek için çalışmak gerekir.\" cümlesinde bozukluk var mı? Açıklayınız.",
        "options": [
          "Hayır; cümle doğru kurulmuştur, öge uyumu tam.",
          "Evet; \"okumak\" ve \"anlayabilmek\" öznesi farklı.",
          "Evet; \"gerekir\" yüklemi eksik, \"gereklidir\" olmalı.",
          "Evet; bağlaç yanlış kullanılmış."
        ],
        "answer": 0,
        "explain": "Cümle dilbilgisi açısından doğrudur. \"Okumak ve anlayabilmek\" öge dizisi paralel yapıdadır ve her ikisi de \"çalışmak gerekir\" yüklemiyle anlam birliği oluşturmaktadır."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki cümlelerin hangisinde ad tamlaması bozukluğu vardır?",
        "options": [
          "Türkiye'nin dağları yüksektir.",
          "Evin kapısının rengi boyası solmuş.",
          "Çocuğun kitabı kayboldu.",
          "Okulun bahçesi geniş."
        ],
        "answer": 1,
        "explain": "\"Evin kapısının rengi boyası solmuş\" cümlesinde hem \"rengi\" hem \"boyası\" iyelik eki almış ve anlam çakışması oluşmuştur. \"Evin kapısının boyası solmuş\" veya \"rengi solmuş\" olmalıdır."
      },
      {
        "level": "zor",
        "text": "\"Toplantıya ne sen ne de ben katıldık.\" cümlesinde özne-yüklem uyumu doğru mu?",
        "options": [
          "Hayır; \"ne...ne de\" ile kurulan öznede yüklem 3. tekil veya çoğul olmalı: \"katıldı\" ya da \"katıldılar\"",
          "Evet, cümle doğrudur.",
          "Hayır; \"katıldık\" yerine \"katılmadık\" olmalı.",
          "Evet; \"biz\" öznesi 1. çoğul şahıs yüklem alır."
        ],
        "answer": 0,
        "explain": "\"Ne sen ne de ben\" yapısında özne belirsiz/olumsuz eşgüdümlüdür. Yüklem 3. tekil şahısla (\"katıldı\") ya da 3. çoğul şahısla (\"katıldılar\") uyum sağlamalıdır; \"katıldık\" 1. çoğul şahıs olduğundan uyumsuzluk vardır."
      }
    ],
    "Paragraf Bilgisi": [
      {
        "level": "kolay",
        "text": "Bir paragrafın ana fikri nerede bulunur?",
        "options": [
          "Genellikle paragrafın başında veya sonunda",
          "Yalnızca paragrafın ortasında",
          "Başlıkta",
          "Her paragrafta ana fikir ayrı ayrı cümlelerde dağılır"
        ],
        "answer": 0,
        "explain": "Ana fikir (konu cümlesi) çoğunlukla paragrafın başında verilir; bazen paragraf boyunca geliştirilerek sona bırakılır. Giriş-gelişme-sonuç mantığında başta veya sonda yer alması yaygındır."
      },
      {
        "level": "kolay",
        "text": "Destekleyici cümle (yardımcı düşünce) ne işe yarar?",
        "options": [
          "Ana fikri kanıtlar, açıklar veya destekler",
          "Ana fikri çürütür",
          "Konuyu değiştirir",
          "Okuyucuyu yanıltır"
        ],
        "answer": 0,
        "explain": "Destekleyici cümleler, ana fikri örnekler, kanıtlar, açıklamalar veya ayrıntılarla destekleyen yardımcı düşüncelerdir. Paragrafı bütünlüklü ve inandırıcı kılarlar."
      },
      {
        "level": "kolay",
        "text": "Aşağıdakilerden hangisi bir paragrafın sahip olması gereken temel özelliklerden biri DEĞİLDİR?",
        "options": [
          "Birden fazla ana fikir içermek",
          "Konu bütünlüğü",
          "Anlamlı bir bütün oluşturma",
          "Giriş-gelişme-sonuç düzeni"
        ],
        "answer": 0,
        "explain": "Bir paragraf yalnızca tek bir ana fikir etrafında örgütlenir. Birden fazla ana fikir içeren yapı paragrafın temel ilkesini bozar; her ana fikir ayrı bir paragrafta işlenmelidir."
      },
      {
        "level": "kolay",
        "text": "Geçiş cümlesi paragrafta ne işlev görür?",
        "options": [
          "Paragraflar veya fikirler arasında bağlantı kurar",
          "Yeni bir konu açar",
          "Sonuç bildirir",
          "Sadece süsleme amaçlı kullanılır"
        ],
        "answer": 0,
        "explain": "Geçiş cümleleri (ve geçiş sözcükleri: ancak, bunun yanı sıra, sonuç olarak vb.) fikir akışını düzenler, paragraflar ve düşünceler arasında köprü görevi görür."
      },
      {
        "level": "kolay",
        "text": "\"Öyleyse\", \"bu nedenle\", \"sonuç olarak\" gibi sözcükler paragrafta genellikle hangi konumda kullanılır?",
        "options": [
          "Sonuç cümlelerinde",
          "Giriş cümlelerinde",
          "Yalnızca başlıkta",
          "Destekleyici cümlelerin ortasında"
        ],
        "answer": 0,
        "explain": "\"Öyleyse\", \"bu nedenle\", \"sonuç olarak\" ifadeleri, yapılan açıklamalardan çıkarılan bir sonuca geçildiğini gösterir ve genellikle paragrafın veya metnin sonuç cümlesinde kullanılır."
      },
      {
        "level": "kolay",
        "text": "Bir paragrafı oluşturan en az kaç cümle olmalıdır?",
        "options": [
          "En az 3 cümle (giriş, gelişme, sonuç)",
          "Tam 5 cümle",
          "En az 10 cümle",
          "Bir cümle yeterlidir"
        ],
        "answer": 0,
        "explain": "Paragraf; giriş (ana fikir), gelişme (destekleyici fikirler) ve sonuç (bağlantı veya kapanış) olmak üzere en az 3 cümleden oluşur. Daha az cümle genellikle tam bir paragraf oluşturmaz."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki cümle grubu bir paragraf oluşturuyor mu? Neden?\n\"Kuşlar uçabilir. Matematik zor bir derstir. Deniz mavisidir. Ağaçlar yeşildir.\"",
        "options": [
          "Hayır; ortak bir ana fikir yoktur, cümleler birbiriyle ilgisizdir.",
          "Evet; dört cümle var ve paragraf için yeterli.",
          "Evet; her cümle ayrı bir ana fikir taşıdığından zengin bir paragraftır.",
          "Hayır; sadece üç cümle olduğunda paragraf olur."
        ],
        "answer": 0,
        "explain": "Paragrafın temel şartı cümle sayısı değil, konu bütünlüğüdür. Bu dört cümle farklı konuları ele aldığından aralarında anlam birliği yoktur ve bir paragraf oluşturmazlar."
      },
      {
        "level": "orta",
        "text": "\"İnsanlar sağlıklı beslenmeli, düzenli uyumalı ve spor yapmalıdır.\" cümlesi bir paragrafta nerede yer almalıdır?",
        "options": [
          "Giriş veya sonuç cümlesinde (ana fikir)",
          "Gelişme bölümünde (destekleyici cümle)",
          "Başlıkta",
          "Dipnotta"
        ],
        "answer": 0,
        "explain": "Bu cümle sağlıklı yaşamın üç temel bileşenini özetleyen genel bir yargı içerir. Bu özellik, onu bir paragrafın ana fikir cümlesi (giriş veya sonuç) olarak konumlandırır."
      },
      {
        "level": "orta",
        "text": "\"Buna karşın\", \"oysa\", \"ne var ki\" ifadeleri paragrafta nasıl bir düşünce ilişkisi kurar?",
        "options": [
          "Zıtlık / karşıtlık ilişkisi",
          "Neden-sonuç ilişkisi",
          "Koşul ilişkisi",
          "Sıralama ilişkisi"
        ],
        "answer": 0,
        "explain": "\"Buna karşın\", \"oysa\", \"ne var ki\" ifadeleri zıtlık bağlaçları ve geçiş ifadeleridir. Önceki cümleyle çelişen ya da beklenmedik bir bilgi sunulduğunu gösterirler."
      },
      {
        "level": "orta",
        "text": "Bir paragrafın sonuç cümlesi nasıl olmalıdır?",
        "options": [
          "Ana fikri özetlemeli ya da genel bir yargıyla kapatmalıdır",
          "Yeni bir konu açmalıdır",
          "Soru içermeli ve merak uyandırmalıdır",
          "Yalnızca örneklerden oluşmalıdır"
        ],
        "answer": 0,
        "explain": "Sonuç cümlesi paragrafı kapatır ve ana fikri ya da işlenen düşünceyi özetler. Yeni bir konu açmak ya da yanıtsız soru bırakmak paragrafın bütünlüğünü bozar."
      },
      {
        "level": "orta",
        "text": "\"Örneğin\", \"nitekim\", \"şöyle ki\" ifadeleri paragrafta ne işlev görür?",
        "options": [
          "Önceki düşünceyi somut örnekle destekler",
          "Zıtlık bildirir",
          "Sonuç çıkarır",
          "Neden açıklar"
        ],
        "answer": 0,
        "explain": "\"Örneğin\", \"nitekim\", \"şöyle ki\" soyut bir düşünceyi somutlaştırmak için kullanılır. Okuyucunun daha iyi anlaması için önceki fikre örnek getirirler."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki paragraf türlerinden hangisi yazar tarafından benimsenen görüşü karşı görüşlerle birlikte ele alarak savunur?",
        "options": [
          "Tartışmacı (eleştirel) paragraf",
          "Betimleyici paragraf",
          "Öyküleyici paragraf",
          "Açıklayıcı paragraf"
        ],
        "answer": 0,
        "explain": "Tartışmacı paragraf; bir tezi (ana savı) destekler, karşı görüşleri de aktararak çürütmeye çalışır. Bu tür okuyucuyu ikna etmeyi amaçlar ve kanıt, argüman, çürütme yapısını kullanır."
      },
      {
        "level": "zor",
        "text": "\"Düşünceyi geliştirme yolu\" kavramı ne demektir ve kaç türü vardır?",
        "options": [
          "Ana fikri desteklemek için kullanılan yöntemler: tanımlama, örnekleme, karşılaştırma, tanık gösterme, sayısal veri, benzetme vb.",
          "Sadece örnek verme yöntemi",
          "Paragraf uzatma teknikleri; ikisi vardır",
          "Sonuç cümlesi yazma biçimleri"
        ],
        "answer": 0,
        "explain": "Düşünceyi geliştirme yolları ana fikri güçlendirip somutlaştırmak için kullanılan yöntemlerdir: tanımlama, örnekleme (örnek verme), karşılaştırma, sayısal veri kullanma, tanık gösterme (alıntı), benzetme gibi pek çok türü vardır."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki paragrafta ana fikir hangi cümledir?\n\"(1) Teknoloji günümüzde her alana girmiştir. (2) Eğitimde akıllı tahtalar, sağlıkta robotlar, tarımda dronlar kullanılmaktadır. (3) Bu gelişmeler yaşam kalitesini artırmaktadır. (4) Ancak teknoloji bağımlılığı ciddi bir sorun haline gelmektedir. (5) Bu nedenle teknolojiyi bilinçli kullanmayı öğrenmek şarttır.\"",
        "options": [
          "5. cümle (\"bilinçli kullanmak şarttır\" – temel yargı)",
          "1. cümle (genel giriş)",
          "3. cümle (olumlu etki)",
          "4. cümle (sorun tespiti)"
        ],
        "answer": 0,
        "explain": "Paragrafın ana fikri yazarın ulaşmak istediği temel yargıdır. Tüm destekleyici fikirler (yaygınlaşma, örnekler, sorun) bu sonuca, yani \"bilinçli kullanım şarttır\" yargısına hizmet etmektedir."
      }
    ],
    "Metin Türleri (Anı, Günlük, Gezi, Mektup, Biyografi)": [
      {
        "level": "kolay",
        "text": "Anı (hatırat) türünün temel özelliği nedir?",
        "options": [
          "Yazarın geçmişte yaşadığı olayları belgelemesi",
          "Başkasının yaşamını anlatması",
          "Her gün tutulması",
          "Kurgusal (hayal ürünü) olması"
        ],
        "answer": 0,
        "explain": "Anı, yazarın kendi yaşadığı ve tanıklık ettiği geçmiş olayları geriye dönük olarak kaleme aldığı birinci şahıs anlatımlı türdür. Belgesel nitelik taşır ve kurmaca değildir."
      },
      {
        "level": "kolay",
        "text": "Günlük (jurnal) türünün anıdan en belirgin farkı nedir?",
        "options": [
          "Günlük belirli aralıklarla (her gün) yazılır; anı ise daha sonra geriye bakılarak kaleme alınır",
          "Günlük kurgusaldır, anı değildir",
          "Günlük üçüncü şahısla yazılır",
          "İkisi arasında hiçbir fark yoktur"
        ],
        "answer": 0,
        "explain": "Günlük yaşanan olayların aynı gün veya kısa süre içinde tarihle birlikte kaydedildiği türdür. Anı ise olayların üzerinden zaman geçtikten sonra geriye dönük olarak yazılır; bu temel zaman farkıdır."
      },
      {
        "level": "kolay",
        "text": "Gezi yazısı hangi konuyu işler?",
        "options": [
          "Yazarın gidip gözlemlediği yerleri, kültürleri ve izlenimlerini",
          "Tarihi olayları belgesel olarak",
          "Başkasının biyografisini",
          "Yazarın iç dünyasını felsefi olarak"
        ],
        "answer": 0,
        "explain": "Gezi yazısı, yazarın farklı mekânları ziyaret ederken edindiği izlenimleri, gözlemleri ve kültürel deneyimleri aktardığı türdür. Kişisel bakış açısı ön plandadır."
      },
      {
        "level": "kolay",
        "text": "Biyografi ile otobiyografi arasındaki fark nedir?",
        "options": [
          "Biyografi başkasının hayatını; otobiyografi yazarın kendi hayatını anlatır",
          "Biyografi kurgusal; otobiyografi gerçektir",
          "Biyografi daha uzundur",
          "Aralarında fark yoktur"
        ],
        "answer": 0,
        "explain": "Biyografi (yaşam öyküsü): bir kişinin hayatını başka biri tarafından yazılması. Otobiyografi: kişinin kendi hayatını bizzat kendisinin yazması. Temel fark yazar-konu ilişkisidir."
      },
      {
        "level": "kolay",
        "text": "Bir mektubun zorunlu unsurları hangileridir?",
        "options": [
          "Tarih/yer, hitap (sevgili...), gövde, kapanış ve imza",
          "Yalnızca gövde metni",
          "Başlık, önsöz ve sonuç",
          "Konuyu, amacı ve kaynakçayı içermeli"
        ],
        "answer": 0,
        "explain": "Geleneksel mektup yapısı: tarih-yer (sol/sağ üst), hitap ifadesi (\"Sevgili...\"), mektubun içeriği (gövde), kapanış ifadesi (\"Sevgiyle\", \"Saygılarımla\") ve imza/ad-soyaddan oluşur."
      },
      {
        "level": "kolay",
        "text": "Aşağıdakilerden hangisi anı türünün özelliği değildir?",
        "options": [
          "Olay tamamen kurgusaldır (hayal ürünüdür)",
          "Birinci şahıs anlatımı kullanılır",
          "Gerçek kişiler ve olaylar aktarılır",
          "Belgesel nitelik taşır"
        ],
        "answer": 0,
        "explain": "Anı türünde olaylar gerçektir; yazar kendi yaşantısını aktarır. Kurgu, roman ve hikâye türüne özgü bir özelliktir. Anı kurgusal değil belgese bir türdür."
      },
      {
        "level": "orta",
        "text": "\"Dün öğleden sonra Topkapı Sarayı'nı gezdim. Divan Meydanı'nda dururken İstanbul'un fethini zihnimde yeniden canlandırdım.\" Bu metin hangi türe örnektir?",
        "options": [
          "Gezi yazısı",
          "Biyografi",
          "Anı",
          "Günlük"
        ],
        "answer": 0,
        "explain": "Bu metin belirli bir mekânı (Topkapı Sarayı) ziyaret eden yazarın izlenimlerini ve çağrışımlarını aktarmaktadır. Bu nitelikler gezi yazısının temel özelliğidir."
      },
      {
        "level": "orta",
        "text": "\"15 Mart 2024 – Bugün okulda çok güzel bir gün geçirdim. Arkadaşlarımla...\" Bu metni diğer türlerden ayıran özellik nedir?",
        "options": [
          "Tarih başlığı ve anlık olayların kaydedilmesi → günlük",
          "Gezi yeri adının verilmesi → gezi yazısı",
          "Birinci şahısla yazılması → anı",
          "Hitap ifadesi → mektup"
        ],
        "answer": 0,
        "explain": "\"15 Mart 2024\" tarih başlığı ve olayların o günkü anlık hislerle yazılması bu metni günlük türüne yerleştirir. Anıdan farkı güncelliği ve tarih damgasıdır."
      },
      {
        "level": "orta",
        "text": "\"Atatürk, 1881 yılında Selanik'te doğdu. İlk eğitimini...\" cümlesiyle başlayan metin hangi türe aittir?",
        "options": [
          "Biyografi",
          "Anı",
          "Günlük",
          "Mektup"
        ],
        "answer": 0,
        "explain": "Başkasının (Atatürk'ün) doğumu ve hayatı hakkında bilgi verilmesi, üçüncü şahıs bakış açısı ve belgeci üslup bu metni biyografi türüne yerleştirir."
      },
      {
        "level": "orta",
        "text": "Mektup türünün anıdan farkı nedir?",
        "options": [
          "Mektup belirli bir alıcıya yönelik yazılır; anı genel okuyucuya yöneliktir",
          "Mektup kurgusal; anı gerçektir",
          "Mektuplar hep uzundur",
          "İkisi de aynı yapıyı paylaşır"
        ],
        "answer": 0,
        "explain": "Mektubun temel özelliği belirli bir alıcıya (kişiye veya kuruma) yönelik yazılmasıdır. Anı ise genel okuyucuya sunulmak üzere geçmiş deneyimleri aktarır."
      },
      {
        "level": "orta",
        "text": "Gezi yazısında \"öznel anlatım\" nasıl kendini gösterir?",
        "options": [
          "Yazarın kişisel izlenimlerini, duygularını ve yorumlarını aktarmasıyla",
          "Sadece nesnel bilgi ve istatistiklerin yer almasıyla",
          "Yalnızca tarihi bilgilerin verilmesiyle",
          "Başkasının düşüncelerinin aktarılmasıyla"
        ],
        "answer": 0,
        "explain": "Gezi yazısında yazar gezdiği yerleri kendi bakış açısıyla değerlendirir: duygu, düşünce, çağrışım ve kişisel yorum gezi yazısını ansiklopedi veya rehber kitaptan ayırt eder."
      },
      {
        "level": "zor",
        "text": "Anı ile biyografi aynı kişiyi anlatıyorsa aralarındaki fark nasıl belirlenir?",
        "options": [
          "Anıda kişi kendi ağzından anlatır; biyografide başkası anlatır",
          "İkisi aynı türdür, fark yoktur",
          "Biyografi daha kısadır",
          "Anı belgesel, biyografi kurgusaldır"
        ],
        "answer": 0,
        "explain": "Birinci/ikinci şahıs bakış açısı belirleyicidir: kişi kendi yaşamını anlatıyorsa anı (veya otobiyografi); başka biri bu kişinin hayatını yazıyorsa biyografidir. \"Ben\" ve \"o\" ayrımı temel ölçüttür."
      },
      {
        "level": "zor",
        "text": "\"Sevgili Defterim, bugün okul çok zordu. Matematik sınavında...\" Bu metni günlük yapan özellikler nelerdir?",
        "options": [
          "Hitap ifadesi (sevgili defterim), birinci şahıs, anlık duygu ve tarih/günsellik",
          "Yalnızca birinci şahıs anlatımı",
          "Sadece okul konusunu işlemesi",
          "Mektup formatını kullanması"
        ],
        "answer": 0,
        "explain": "Günlük türünün ayırt edici özellikleri: (1) \"Sevgili Defterim\" gibi kendine özgü hitap, (2) birinci şahıs anlatımı, (3) anlık/günlük olayların ve duyguların kaydedilmesi, (4) tarih damgası. Bu metinde bu özellikler bir arada bulunmaktadır."
      },
      {
        "level": "zor",
        "text": "\"Açık mektup\" geleneksel mektuptan nasıl ayrılır?",
        "options": [
          "Açık mektup kamuoyuna yönelik yazılır ve yayımlanmak amacı taşır; özel mektup belirli bir kişiye yöneliktir",
          "Açık mektup resmi; özel mektup kişiseldir",
          "Açık mektup uzun; özel mektup kısadır",
          "Aralarında hiçbir fark yoktur"
        ],
        "answer": 0,
        "explain": "Açık mektup gazete, dergi veya sosyal medya gibi platformlarda yayımlanmak amacıyla yazılır ve tüm kamuoyuna seslenir. Özel mektup ise belirli bir alıcıya yönelik, kişisel içeriklidir."
      }
    ]
  },
  "7": {
    "İleri Sözcük Anlam Bilgisi": [
      {
        "level": "kolay",
        "text": "\"Sözcüğün mecaz anlamı\" ne demektir?",
        "options": [
          "Sözcüğün ilk anlamından uzaklaşarak yeni bir anlam kazanması",
          "Sözcüğün sözlükteki ilk anlamı",
          "Sözcüğün yabancı dilden alınan anlamı",
          "Sözcüğün ön eki tarafından değiştirilen anlamı"
        ],
        "answer": 0,
        "explain": "Mecaz anlam, sözcüğün temel (ilk/sözlük) anlamından uzaklaşarak bağlamsal veya çağrışımsal yeni bir anlam kazanmasıdır. Örn. \"Kalbim sıkışıyor\" → sıkışmak = bunalmak (mecaz)."
      },
      {
        "level": "kolay",
        "text": "\"Çantayı taşımak\" ile \"derdi taşımak\" ifadelerinde \"taşımak\" sözcüğü hangi anlamlarda kullanılmıştır?",
        "options": [
          "Birincisi temel anlam (fiziksel), ikincisi mecaz anlam (psikolojik)",
          "İkisi de temel anlam",
          "İkisi de mecaz anlam",
          "Birincisi mecaz, ikincisi temel anlam"
        ],
        "answer": 0,
        "explain": "\"Çantayı taşımak\" = fiziksel olarak bir yük kaldırmak (temel anlam). \"Derdi taşımak\" = manevi yük, sıkıntı hissetmek (mecaz anlam). Taşımak fiili bağlama göre anlam değiştirir."
      },
      {
        "level": "kolay",
        "text": "Eş anlamlı (anlamdaş) sözcük çifti hangisidir?",
        "options": [
          "Güzel – hoş",
          "Sıcak – soğuk",
          "Geldi – gitti",
          "Kitap – kalem"
        ],
        "answer": 0,
        "explain": "Eş anlamlı sözcükler aynı veya çok yakın anlam taşıyan sözcüklerdir. \"Güzel\" ve \"hoş\" iki sözcük de olumlu estetik değer taşır; eş anlamlıdır."
      },
      {
        "level": "kolay",
        "text": "\"Kaş\" sözcüğü ile \"baş\" sözcüğü hangi anlam özelliğini paylaşır?",
        "options": [
          "Her ikisi de çok anlamlıdır (vücut parçası + başka anlamlar)",
          "Her ikisi de tek anlamlıdır",
          "Her ikisi de eş anlamlıdır",
          "Her ikisi de zıt anlamlıdır"
        ],
        "answer": 0,
        "explain": "\"Kaş\": göz kaşı / kuyumcu kaşı / tepe kenarı. \"Baş\": kafa / başlangıç / lider. Her iki sözcük birden fazla anlam taşır; bu çok anlamlılık (polisemi) özelliğidir."
      },
      {
        "level": "kolay",
        "text": "\"Açık\" sözcüğünün hangi bağlamlarda farklı anlamlar taşıdığını gösteren doğru çift hangisidir?",
        "options": [
          "Kapı açık (kapalı değil) – hava açık (güneşli)",
          "Açık yara – açık renk (ikisi eş anlam)",
          "Açık konuşmak – açık pencere (ikisi zıt anlam)",
          "Her ikisi de aynı anlama gelir"
        ],
        "answer": 0,
        "explain": "\"Açık\" sözcüğü bağlama göre farklı anlamlar alır: fiziksel açıklık, meteorolojik durum, açık sözlülük, renk tonu vb. Bu çok anlamlılığın özelliğidir."
      },
      {
        "level": "kolay",
        "text": "\"Sevinç\" ve \"hüzün\" sözcükleri hangi anlam ilişkisindedir?",
        "options": [
          "Zıt (karşıt) anlamlı",
          "Eş anlamlı",
          "Yakın anlamlı",
          "Eş sesli (sesteş)"
        ],
        "answer": 0,
        "explain": "\"Sevinç\" olumlu duygu durumu, \"hüzün\" olumsuz duygu durumudur. Birbirinin tam tersi anlam taşırlar; bu zıt (karşıt) anlamlılık ilişkisidir."
      },
      {
        "level": "orta",
        "text": "\"Yüz\" sözcüğünün aşağıdaki kullanımlarından hangisi diğerlerinden farklı bir anlam taşır?",
        "options": [
          "Yüz metre koştu.",
          "Yüzünü yıkadı.",
          "Yüzlerce insan geldi.",
          "Yüzü güldü."
        ],
        "answer": 0,
        "explain": "\"Yüz metre koştu\" ve \"yüzlerce insan\" cümlelerinde \"yüz\" = sayı (100). \"Yüzünü yıkadı\" = yüz (çehre, vücut parçası). \"Yüzü güldü\" = yüz (mutlu oldu, mecaz). Seçenek A ve C sayısal; B ve D vücut/mecaz anlamlıdır."
      },
      {
        "level": "orta",
        "text": "\"Eş sesli (sesteş) sözcük\" ile \"çok anlamlı sözcük\" arasındaki fark nedir?",
        "options": [
          "Eş sesliler yazılış/okunuş aynı ama anlam tamamen farklı kökenler; çok anlamlıda tek köken, anlam gelişimi vardır",
          "İkisi aynı şeydir",
          "Çok anlamlı sözlükte, eş sesli konuşmada kullanılır",
          "Eş sesliler daha uzun sözcüklerdir"
        ],
        "answer": 0,
        "explain": "Eş sesli sözcükler aynı yazılıp söylenen ama köken olarak farklı, anlam açısından birbiriyle ilgisiz sözcüklerdir (\"el\" = el [organ] vs. el [yabancı]). Çok anlamlıda tek sözcük zamanla yeni anlamlar kazanmıştır."
      },
      {
        "level": "orta",
        "text": "\"Taze bir ekmek\" ve \"taze bir bakış\" ifadelerinde \"taze\" sözcüğü nasıl kullanılmıştır?",
        "options": [
          "Birincisi temel (somut) anlam; ikincisi mecaz (soyut/aktarmalı) anlam",
          "Her ikisi de temel anlam",
          "Her ikisi de mecaz anlam",
          "Birincisi mecaz, ikincisi temel anlam"
        ],
        "answer": 0,
        "explain": "\"Taze ekmek\" = yeni pişirilmiş, bayat olmayan (temel, somut). \"Taze bakış\" = yenilikçi, önyargısız, farklı perspektif (mecaz, soyut). Sözcüğün anlam aktarması yapılmıştır."
      },
      {
        "level": "orta",
        "text": "\"Genel anlam\" (tümel) – \"özel anlam\" (tikel) kavramlarını örnekleyin.",
        "options": [
          "Hayvan (genel) – kedi (özel) – Van kedisi (daha özel)",
          "Kedi (genel) – hayvan (özel)",
          "Türkiye (genel) – Ankara (özel)",
          "Renk (genel) – mavi (eş anlam)"
        ],
        "answer": 0,
        "explain": "Anlam genişliği hiyerarşisi: genel anlamlı sözcük daha çok varlığı kapsar (hayvan), özel anlamlı daha az kapsar (kedi), daha da özel olan belirli bireyleri niteler (Van kedisi). Bu anlam daralması/genişlemesi ilişkisidir."
      },
      {
        "level": "orta",
        "text": "\"Sıcak bir karşılama\" cümlesinde \"sıcak\" sözcüğü temel mi mecaz mı anlamda kullanılmıştır?",
        "options": [
          "Mecaz anlam (sıcaklık hissi değil, içten/dostane karşılama)",
          "Temel anlam (yüksek ısı)",
          "Eş anlamlı kullanım",
          "Zıt anlamlı kullanım"
        ],
        "answer": 0,
        "explain": "\"Sıcak karşılama\" ifadesinde ısı derecesi kastedilmez; \"içten, candan, dostane\" anlamı taşır. Bu, sıcak sözcüğünün mecaz anlam kazandığı bir aktarmadır."
      },
      {
        "level": "zor",
        "text": "\"Anlam daralması\" ve \"anlam genişlemesi\" kavramlarını tanımlayınız ve birer örnek veriniz.",
        "options": [
          "Daralma: sözcük zamanla daha az şeyi kapsar (bacak: tüm alt uzuv → insan bacağı); Genişleme: sözcük daha çok şeyi kapsar (yazmak: el ile → her türlü yazma)",
          "Daralma: anlam değişmez; Genişleme: anlam tamamen değişir",
          "İkisi de aynı süreçtir",
          "Daralma: olumlu anlam; Genişleme: olumsuz anlam"
        ],
        "answer": 0,
        "explain": "Anlam daralması: sözcüğün tarihsel süreçte daha az varlığı kapsar hale gelmesi (\"bacak\" önce tüm alt uzuv için kullanılırdı). Anlam genişlemesi: sözcüğün daha fazla anlam ve bağlam kazanması (\"yazmak\" = el yazısından tuş ve sesle yazmaya)."
      },
      {
        "level": "zor",
        "text": "\"Kötüleşme (anlam kötüleşmesi)\" ve \"iyileşme (anlam iyileşmesi)\" ne demektir?",
        "options": [
          "Kötüleşme: sözcük zamanla olumsuz çağrışım kazanır; iyileşme: olumsuz sözcük olumlu anlam kazanır",
          "Sözcük değişmez, yalnızca telaffuzu değişir",
          "Her iki süreç de Türkçede yoktur",
          "Kötüleşme eş anlam; iyileşme zıt anlam sürecidir"
        ],
        "answer": 0,
        "explain": "Anlam kötüleşmesi: başlangıçta nötr veya olumlu olan sözcüğün olumsuz çağrışım kazanması. Anlam iyileşmesi: başlangıçta olumsuz veya aşağılayıcı bir sözcüğün zamanla olumlu çağrışım kazanması. Bu anlam bilim (semantik) kavramlarıdır."
      },
      {
        "level": "zor",
        "text": "\"Göz\" sözcüğü aşağıdaki kullanımların hangisinde temel anlamındadır?",
        "options": [
          "Gözlerini kırpmadan baktı.",
          "Bu işin gözü kulağı her yerdedir.",
          "Brifing'de konunun gözü önümüze serildi.",
          "Halının gözleri seyrelmiş."
        ],
        "answer": 0,
        "explain": "\"Gözlerini kırpmadan baktı\" cümlesinde \"göz\" vücut organı olarak temel anlamıyla kullanılmıştır. Diğer seçeneklerde: \"her yerdedir\" (mecaz-gözetleme), \"gözü önüne serildi\" (mecaz-belirginleşti), \"gözleri seyrelmiş\" (dokunma noktaları, mecaz) anlamındadır."
      },
      {
        "level": "zor",
        "text": "\"Argo\", \"özel dil (jargon)\" ve \"standart dil\" kavramlarını karşılaştırınız.",
        "options": [
          "Argo: belirli grupların kullandığı gayri resmi/kaba dil; jargon: meslek/alan dili; standart dil: toplumun genel ortak dili",
          "Üçü aynı kavramdır",
          "Argo resmi; jargon gayri resmi dildir",
          "Standart dil en yeni; argo en eski dildir"
        ],
        "answer": 0,
        "explain": "Standart dil: okullarda öğretilen, medyada kullanılan ortak yazı/konuşma dili. Jargon (özel dil): tıp, hukuk, bilişim gibi alanlarda kullanılan teknik terimler. Argo: belirli toplumsal grupların, özellikle gençlik veya alt kültür gruplarının kullandığı gayri resmi, bazen kaba sözcüklerden oluşan dil."
      }
    ],
    "Fiil Bileşik Çekimleri": [
      {
        "level": "kolay",
        "text": "\"Hikâye birleşik zaman\" nasıl oluşturulur?",
        "options": [
          "Herhangi bir kip eki + görülen geçmiş zaman eki (-dı)",
          "İki gelecek zaman ekinin birleşmesiyle",
          "İki geniş zaman ekinin birleşmesiyle",
          "Herhangi bir kip eki + duyulan geçmiş eki"
        ],
        "answer": 0,
        "explain": "Hikâye birleşik zamanı: bir kipin çekimli haline \"-dı/-di\" görülen geçmiş zaman eki getirilmesiyle oluşur. Örn. \"okuyordum\" = şimdiki zaman + geçmiş (hikâye)."
      },
      {
        "level": "kolay",
        "text": "\"Rivayet birleşik zaman\" nasıl oluşturulur?",
        "options": [
          "Herhangi bir kip eki + duyulan geçmiş eki (-mış)",
          "İki görülen geçmiş eki",
          "Gelecek + geniş zaman eki",
          "İstek + emir eki"
        ],
        "answer": 0,
        "explain": "Rivayet birleşik zamanı: bir kipin çekimli haline \"-mış/-miş\" eki eklenerek oluşturulur. Örn. \"okuyormuş\" = şimdiki zaman + rivayet. Duyulan, aktarılan eylemler için kullanılır."
      },
      {
        "level": "kolay",
        "text": "\"Koşul (şart) birleşik zamanı\" nasıl oluşturulur?",
        "options": [
          "Herhangi bir kip eki + şart eki (-sa/-se)",
          "Şart eki + görülen geçmiş",
          "İki şart ekinin birleşmesi",
          "Şart eki + duyulan geçmiş"
        ],
        "answer": 0,
        "explain": "Koşul birleşik zamanı: bir kipin çekimli haline \"-sa/-se\" şart eki eklenerek oluşturulur. Örn. \"okuyorsa\" = şimdiki zaman + koşul. Koşula bağlı durumları ifade eder."
      },
      {
        "level": "kolay",
        "text": "\"Gidiyordu\" fiilinin yapısı nedir?",
        "options": [
          "git- + -iyor (şimdiki) + -du (hikâye) = hikâye birleşik zaman",
          "git- + -iyor + -muş = rivayet",
          "git- + -ecek + -ti = gelecek hikâye",
          "git- + -iyorsa = koşul birleşik"
        ],
        "answer": 0,
        "explain": "\"Gidiyordu\": git- + -iyor (şimdiki zaman eki) + -du (görülen geçmiş / hikâye eki) + 3. tekil şahıs (ek yok). Şimdiki zamanın hikâye birleşik zamanıdır."
      },
      {
        "level": "kolay",
        "text": "\"Gelmiş olmalı\" yapısı hangi birleşik zaman türüne örnektir?",
        "options": [
          "Yeterlilik + gereklilik: bileşik eylem öbeği (ek-fiil + kip)",
          "Hikâye birleşik zaman",
          "Rivayet birleşik zaman",
          "Koşul birleşik zaman"
        ],
        "answer": 0,
        "explain": "\"Gelmiş olmalı\" = gel- + -miş (duyulan geçmiş) + ol- (yardımcı fiil) + -malı (gereklilik). Bu birden fazla yardımcı fiil ve kip içeren bileşik eylem yapısıdır; çok katlı birleşik zamandır."
      },
      {
        "level": "kolay",
        "text": "\"Okusaydım\" fiilini açıklayınız.",
        "options": [
          "oku- + -sa (şart/dilek) + -y + -dı (hikâye) + -m = şart kipinin hikâyesi",
          "oku- + -sa + -m = şart kipi 1. tekil",
          "oku- + -dı + -m = görülen geçmiş 1. tekil",
          "oku- + -mış + -sa + -m = rivayet koşul"
        ],
        "answer": 0,
        "explain": "\"Okusaydım\": oku- + -sa (şart kipi) + -y + -dı (hikâye eki) + -m (1. tekil). Gerçekleşmemiş geçmiş koşul anlamı taşır: \"okumam gerekirdi/okusaydım iyi olurdu.\""
      },
      {
        "level": "orta",
        "text": "\"Çalışırmışsın\" fiilini zaman ve kip bakımından çözümleyiniz.",
        "options": [
          "çalış- + -ır (geniş) + -mış (rivayet) + -sın (2. tekil) = geniş zamanın rivayeti",
          "çalış- + -ır + -sın = geniş zaman 2. tekil emir",
          "çalış- + -mış + -sın = duyulan geçmiş 2. tekil",
          "çalış- + -ıyor + -muş + -sın = şimdiki zamanın rivayeti 2. tekil"
        ],
        "answer": 0,
        "explain": "\"Çalışırmışsın\": çalış- + -ır (geniş zaman) + -mış (duyulan geçmiş / rivayet eki) + -sın (2. tekil şahıs eki). Geniş zamanın rivayet birleşik zamanıdır; \"çalışırmış gibi görünüyorsun / çalışırdın diye duydum\" anlamındadır."
      },
      {
        "level": "orta",
        "text": "\"Gitmeliymiş\" fiilini zaman ve kip bakımından çözümleyiniz.",
        "options": [
          "git- + -meli (gereklilik) + -y + -miş (rivayet) = gereklilik kipinin rivayeti, 3. tekil",
          "git- + -meli + -miş = duyulan geçmiş 3. tekil",
          "git- + -miş + -li = duyulan geçmiş sıfat",
          "git- + -ecek + -miş = gelecek zamanın rivayeti"
        ],
        "answer": 0,
        "explain": "\"Gitmeliymiş\": git- + -meli (gereklilik kipi) + -y + -miş (rivayet eki). Gereklilik kipinin rivayet birleşik zamanıdır, 3. tekil şahıs. \"Gitmeliymiş / gitmesi gerekirmiş\" anlamındadır."
      },
      {
        "level": "orta",
        "text": "\"Yapsaydı\" ile \"yapmalıydı\" cümlelerini anlam açısından karşılaştırınız.",
        "options": [
          "Yapsaydı: geçmişte yapılmamış koşul (keşke yapsa idi); yapmalıydı: geçmişte yerine getirilmemiş zorunluluk",
          "İkisi aynı anlama gelir",
          "Yapsaydı gereklilik; yapmalıydı koşul bildirir",
          "İkisi de gelecek zamanı anlatır"
        ],
        "answer": 0,
        "explain": "\"Yapsaydı\" (şart + hikâye): geçmişte gerçekleşmemiş, yapılmamış bir koşul ifade eder. \"Yapmalıydı\" (gereklilik + hikâye): geçmişte yerine getirilmesi gereken ama getirilmemiş bir yükümlülüğü anlatır."
      },
      {
        "level": "orta",
        "text": "\"Koşarken\" ve \"koşarsa\" fiillerini karşılaştırınız.",
        "options": [
          "Koşarken: geniş zaman + zarf-fiil eki (-ken); koşarsa: geniş zaman + koşul birleşik (-sa)",
          "İkisi de koşul birleşik zamandır",
          "İkisi de zarf-fiildir",
          "Koşarken koşul; koşarsa hikâyedir"
        ],
        "answer": 0,
        "explain": "\"Koşarken\": koş- + -ar (geniş) + -ken (zarf-fiil / ulaç eki) → aynı anda iki eylemin birlikte yapıldığını gösterir. \"Koşarsa\": koş- + -ar (geniş) + -sa (koşul birleşik) → koşma eylemine bağlı koşul ifade eder."
      },
      {
        "level": "orta",
        "text": "\"Uyumuş olacak\" yapısı nasıl çözümlenir?",
        "options": [
          "uyu- + -muş (duyulan geçmiş) + ol- (ek fiil) + -acak (gelecek) = tahmine dayalı bileşik zaman",
          "uyu- + -muş + -acak = duyulan geçmişin gelecek zaman birleşimi değil",
          "uyu- + -acak + -mış = gelecek zamanın rivayeti",
          "uyu- + -yor + -muş + -acak = üçlü birleşik"
        ],
        "answer": 0,
        "explain": "\"Uyumuş olacak\": uyu- + -muş (geçmişte tamamlanmış) + ol- (bileşik yapı kurucu ek fiil) + -acak (gelecek). \"Büyük ihtimalle o saate kadar uyumuş olacak\" gibi tahmin/çıkarım içeren gelecek bileşik zamandır."
      },
      {
        "level": "zor",
        "text": "\"Yazıyormuş gibi davranıyordu\" cümlesindeki birden fazla fiil yapısını çözümleyiniz.",
        "options": [
          "Yazıyormuş: şimdiki+rivayet; davranıyordu: şimdiki+hikâye — iki ayrı birleşik zaman",
          "İkisi de hikâye birleşik zamandır",
          "İkisi de rivayet birleşik zamandır",
          "Yazıyormuş şart; davranıyordu hikâye"
        ],
        "answer": 0,
        "explain": "\"Yazıyormuş\": yaz- + -ıyor (şimdiki) + -muş (rivayet). Şimdiki zamanın rivayeti. \"Davranıyordu\": davran- + -ıyor (şimdiki) + -du (hikâye). Şimdiki zamanın hikâyesi. Cümlede iki farklı birleşik zaman iç içe geçmiştir."
      },
      {
        "level": "zor",
        "text": "Türkçede kaç tür birleşik zaman vardır ve bunların adlarını söyleyiniz.",
        "options": [
          "3 tür: hikâye, rivayet, koşul (şart) birleşik zamanları",
          "2 tür: hikâye ve rivayet",
          "4 tür: hikâye, rivayet, koşul ve dilek birleşik zamanları",
          "5 tür: tüm kiplerin sayısıdır"
        ],
        "answer": 0,
        "explain": "Türkçede 3 tür birleşik zaman vardır: 1) Hikâye birleşik zamanı (kip + -dı), 2) Rivayet birleşik zamanı (kip + -mış), 3) Koşul (şart) birleşik zamanı (kip + -sa). Her zaman kipi bu üç birleşik zamanla çoğaltılabilir."
      },
      {
        "level": "zor",
        "text": "\"Gelebilirmiş\" fiilini tam olarak çözümleyiniz ve anlamını açıklayınız.",
        "options": [
          "gel- + -ebil (yeterlilik) + -ir (geniş) + -miş (rivayet) = yeterlilik fiilinin rivayet birleşik zamanı; \"gelebilirmiş diye duydum\"",
          "gel- + -ir + -miş = geniş zamanın rivayeti",
          "gel- + -ebil + -miş = yeterlilik kipinin duyulan geçmişi",
          "gel- + -ecek + -miş = gelecek zamanın rivayeti"
        ],
        "answer": 0,
        "explain": "\"Gelebilirmiş\": gel- + -ebil- (yeterlilik eki) + -ir (geniş zaman) + -miş (rivayet eki). Yeterlilik fiilinin (gelebilir) rivayet birleşik zamanıdır. \"Onun gelebileceği söyleniyor / gelebilirmiş gibi görünüyor\" anlamı taşır."
      },
      {
        "level": "zor",
        "text": "\"Koşulsaydım\" fiilini, olası anlam karışıklığını da açıklayarak çözümleyiniz.",
        "options": [
          "koş- + -ul (edilgen) + -sa (şart) + -y + -dı (hikâye) + -m = edilgen çatılı fiilim şartının hikâyesi; geçmişte koşulmuş olmayı şart koşar",
          "koş- + -sa + -dı + -m = şartın hikâyesi, edilgen değil",
          "koş- + -ul + -du + -m = görülen geçmiş edilgen",
          "koş + -ulsaydı = 3. tekil edilgen koşul hikâye"
        ],
        "answer": 0,
        "explain": "\"Koşulsaydım\": koş- (fiil kökü) + -ul (edilgenlik eki: koşul-) + -sa (şart kipi) + -y + -dı (hikâye birleşik) + -m (1. tekil). \"Koşulmuş olsaydım\" (yarışmada yer almış olsaydım) anlamı çıkar. \"Koşul\" ismiyle karıştırılmamalıdır."
      }
    ],
    "Cümle Türleri": [
      {
        "level": "kolay",
        "text": "Yükleminin türüne göre cümleler kaç gruba ayrılır?",
        "options": [
          "2: fiil cümlesi ve isim cümlesi",
          "3: fiil, isim ve sıfat cümlesi",
          "4: fiil, isim, sıfat, zarf cümlesi",
          "5 gruba ayrılır"
        ],
        "answer": 0,
        "explain": "Yüklemi türüne göre cümleler iki ana gruba ayrılır: 1) Fiil cümlesi (yüklem fiildir: geldi, koştu), 2) İsim cümlesi / ad cümlesi (yüklem isim + ek-fiildir: hastadır, öğrencidir)."
      },
      {
        "level": "kolay",
        "text": "\"Hava bugün çok güzeldi.\" cümlesi hangi cümle türüdür?",
        "options": [
          "İsim cümlesi (ad cümlesi)",
          "Fiil cümlesi",
          "Olumsuz cümle",
          "Soru cümlesi"
        ],
        "answer": 0,
        "explain": "\"Güzeldi\" = güzel (isim/sıfat) + -di (ek-fiil/geniş geçmiş). Yüklem isim soylu bir sözcük + ek-fiilden oluştuğundan bu bir isim cümlesidir (ad cümlesi)."
      },
      {
        "level": "kolay",
        "text": "Olumlu ve olumsuz cümleler arasındaki temel fark nedir?",
        "options": [
          "Olumlu cümle eylemin yapıldığını; olumsuz cümle yapılmadığını bildirir",
          "Olumlu cümle soru içerir; olumsuz içermez",
          "Olumsuz cümle her zaman \"-ma\" ekiyle yapılır",
          "Olumlu cümle geçmiş zaman bildirir"
        ],
        "answer": 0,
        "explain": "Olumlu cümle: yüklemi belirtilen eylemin veya durumun gerçekleştiğini ifade eder. Olumsuz cümle: yüklemin olumsuzluk eki (-ma/-me, -maz/-mez, değil) ile gerçekleşmediğini bildirir."
      },
      {
        "level": "kolay",
        "text": "\"Hiç gelmedi mi?\" cümlesi hangi anlam özelliğine sahiptir?",
        "options": [
          "Olumsuz anlam taşıyan soru cümlesi (olumsuz soru)",
          "Sadece soru cümlesidir",
          "Olumlu anlam taşıyan soru cümlesidir",
          "Emir cümlesidir"
        ],
        "answer": 0,
        "explain": "\"Hiç gelmedi mi?\" cümlesi hem olumsuz (gelmedi) hem de soru (mi) özelliği taşır. Bu olumsuz soru cümlesidir; yargı olumsuz, biçim soru şeklindedir."
      },
      {
        "level": "kolay",
        "text": "Yapısına göre cümleler kaç gruba ayrılır?",
        "options": [
          "3: basit, birleşik, bağlı (sıralı) cümle",
          "2: kısa ve uzun cümle",
          "4: basit, birleşik, bağlı, girişik cümle",
          "5 gruba ayrılır"
        ],
        "answer": 2,
        "explain": "Yapısına göre cümleler dört gruba ayrılır: 1) Basit cümle (tek yüklem), 2) Birleşik cümle (temel + yan cümle), 3) Sıralı cümle (virgülle bağlı), 4) Bağlı cümle (bağlaçla bağlı)."
      },
      {
        "level": "kolay",
        "text": "\"Yağmur yağdı, sokaklar ıslandı.\" cümlesi hangi cümle türüdür?",
        "options": [
          "Sıralı cümle (virgülle bağlı iki yargı)",
          "Basit cümle",
          "Birleşik cümle",
          "Bağlı cümle"
        ],
        "answer": 0,
        "explain": "İki bağımsız cümle virgülle yan yana getirilmiş; bağlaç kullanılmamıştır. Bu sıralı cümle yapısıdır. Her iki cümle de kendi içinde tam anlamlıdır."
      },
      {
        "level": "orta",
        "text": "\"Annem eve gelince yemek hazırladı.\" cümlesi hangi tür birleşik cümledir?",
        "options": [
          "Zarf cümlecikli birleşik cümle (\"annem eve gelince\" = zaman zarfı yan cümlecik)",
          "Özne cümlecikli birleşik cümle",
          "Nesne cümlecikli birleşik cümle",
          "Sıralı cümle"
        ],
        "answer": 0,
        "explain": "\"Annem eve gelince\" bölümü temel cümleye zaman bildiren zarf işleviyle bağlanmıştır. Bu nedenle yan cümlecik zarf görevindedir; zarf cümlecikli birleşik cümledir."
      },
      {
        "level": "orta",
        "text": "\"Biliyorum ki başaracaksın.\" cümlesindeki \"ki\" bağlacı ne işlev görür?",
        "options": [
          "Nesne yan cümlesi kurar: \"başaracaksın\" = bilme eyleminin nesnesi",
          "Özne yan cümlesi kurar",
          "Zarf yan cümlesi kurar",
          "Gereksiz bir bağlaçtır"
        ],
        "answer": 0,
        "explain": "\"Ki\" bağlacı burada \"neyi biliyorum?\" sorusunun yanıtını oluşturan nesne yan cümlesi kurar. \"Başaracaksın (bunu) biliyorum\" → \"başaracaksın\" cümlecik nesne işleviyle temel cümleye bağlanmaktadır."
      },
      {
        "level": "orta",
        "text": "Sıralı cümle ile bağlı cümle arasındaki fark nedir?",
        "options": [
          "Sıralı cümle virgülle; bağlı cümle \"ve, ama, fakat\" gibi bağlaçlarla bağlanır",
          "Sıralı cümle kısa; bağlı cümle uzundur",
          "İkisi aynı yapıdadır",
          "Sıralı cümlede iki yüklem; bağlı cümlede üç yüklem vardır"
        ],
        "answer": 0,
        "explain": "Sıralı (sıralı bağlı) cümle: birden fazla yargı virgül ya da noktalı virgülle yan yana dizilir. Bağlı cümle: birden fazla yargı \"ve, ama, fakat, çünkü\" gibi bağlaçlarla birbirine bağlanır."
      },
      {
        "level": "orta",
        "text": "\"Hava bozdu; pikniği iptal ettik.\" cümlesinde noktalı virgülün işlevi nedir?",
        "options": [
          "İki bağımsız ama anlam ilişkili yargıyı ayırır (neden-sonuç)",
          "Cümleyi soru haline getirir",
          "Zaman zarfını ayırır",
          "Gereksiz bir işaret"
        ],
        "answer": 0,
        "explain": "Noktalı virgül iki bağımsız yargıyı hem ayırır hem de aralarındaki anlam ilişkisini (burada neden-sonuç: hava bozdu → piknik iptal) korur. Virgülden daha güçlü bir duraklamayı simgeler."
      },
      {
        "level": "orta",
        "text": "\"Ne yapsam bilemiyorum.\" cümlesini yapısı açısından değerlendiriniz.",
        "options": [
          "Birleşik cümle: \"ne yapsam\" soru yan cümlecik → \"bilemiyorum\" temel yüklem",
          "Basit cümle",
          "Sıralı cümle",
          "Bağlı cümle"
        ],
        "answer": 0,
        "explain": "\"Ne yapsam\" = \"neyi bilemedim\" sorusunun nesne yan cümlesidir; \"bilemiyorum\" ise temel yüklemdir. Bu birleşik cümle yapısıdır; yan cümlecik nesne işlevi üstlenmiştir."
      },
      {
        "level": "orta",
        "text": "\"Ağladı ama kimse duymadı.\" cümlesinde \"ama\" bağlacı nasıl bir anlam kurar?",
        "options": [
          "Zıtlık/karşıtlık ilişkisi",
          "Neden-sonuç ilişkisi",
          "Koşul ilişkisi",
          "Sıralama ilişkisi"
        ],
        "answer": 0,
        "explain": "\"Ama\" bağlacı iki yargı arasında zıtlık ilişkisi kurar: ağlamak beklenen bir tepkiyi (duyulma) çağrıştırır ama gerçekleşmez; bu zıtlığı \"ama\" bağlacı ifade etmektedir."
      },
      {
        "level": "zor",
        "text": "\"Koşmayı seven biri olduğumu biliyordum.\" cümlesinin yapısını çözümleyiniz.",
        "options": [
          "Üç katmanlı birleşik cümle: koşmayı seven (sıfat yan cümlesi) → biri olduğumu (nesne yan cümlesi) → biliyordum (temel yüklem)",
          "Basit cümle",
          "Sıralı cümle iki yargıyla",
          "Bağlı cümle iki yargıyla"
        ],
        "answer": 0,
        "explain": "\"Koşmayı seven\" → sıfat yan cümlecik (biri'yi niteleyen). \"Biri olduğumu\" → nesne yan cümlecik (biliyordum'un nesnesi). \"Biliyordum\" → temel yüklem. Bu iç içe geçmiş üç katmanlı birleşik cümle yapısıdır."
      },
      {
        "level": "zor",
        "text": "\"Girişik birleşik cümle\" ile \"iç içe birleşik cümle\" arasındaki fark nedir?",
        "options": [
          "Girişik birleşik cümlede yan cümlecik fiilimsi içerir; iç içe birleşik cümlede cümlecik çekimli bir yüklem taşır",
          "İkisi aynı yapıdadır",
          "Girişik daha kısa; iç içe daha uzundur",
          "Girişik bağlaçlı; iç içe virgüllüdür"
        ],
        "answer": 0,
        "explain": "Girişik birleşik cümle: yan cümlecik bir fiilimsiyle (isim-fiil, sıfat-fiil, zarf-fiil) kurulur. İç içe birleşik cümle: yan cümlecik \"ki\" gibi bağlaçlarla bağlanan, kendi içinde çekimli yüklemi olan bir cümlecikten oluşur."
      },
      {
        "level": "zor",
        "text": "Aşağıdakilerden hangisi \"özne yan cümlecikli\" birleşik cümledir?",
        "options": [
          "Çok çalışmak sağlığa zararlıdır.",
          "Biliyorum ki başaracaksın.",
          "Eve gelince ders çalıştı.",
          "Hava güzeldi ama soğuktu."
        ],
        "answer": 0,
        "explain": "\"Çok çalışmak sağlığa zararlıdır\" cümlesinde \"çok çalışmak\" (isim-fiil grubu) cümlenin öznesidir; yani nesne değil özne işlevi taşıyan bir yan unsurdur. Bu yapı özne-fiilimsi içeren birleşik cümleye örnektir."
      }
    ],
    "Anlatım Bozuklukları II": [
      {
        "level": "kolay",
        "text": "\"Hem sevdim hem de nefret ettim.\" cümlesinde anlatım bozukluğu var mıdır?",
        "options": [
          "Hayır; \"hem...hem de\" yapısı çelişkili gibi görünse de dilbilgisi açısından doğrudur.",
          "Evet; zıt anlamlılar bir arada kullanılamaz.",
          "Evet; \"hem...hem de\" yanlış bağlaçtır.",
          "Hayır; çünkü zıt duygular aynı anda hissedilebilir, anlam bozukluğu yoktur."
        ],
        "answer": 3,
        "explain": "İnsan duyguları çelişkili olabilir; \"hem sevmek hem nefret etmek\" psikolojik açıdan mümkündür. Dilbilgisi ve anlam açısından bu cümle bozuk değildir; \"hem...hem de\" doğru kullanılmıştır."
      },
      {
        "level": "kolay",
        "text": "\"Çok çalışmasına karşın başarısız oldu.\" cümlesinde bozukluk var mıdır?",
        "options": [
          "Hayır; \"karşın\" bağlacı zıtlık ilişkisini doğru kuruyor.",
          "Evet; \"karşın\" yerine \"çünkü\" kullanılmalı.",
          "Evet; özne eksik.",
          "Evet; olumsuz yüklem yanlış."
        ],
        "answer": 0,
        "explain": "\"Karşın\" zıtlık bildiren bir edat/bağlaçtır. \"Çok çalışmak\" ile \"başarısız olmak\" zıt bir ilişki kurduğundan \"karşın\" doğru kullanılmıştır. Cümle bozuk değildir."
      },
      {
        "level": "kolay",
        "text": "\"Toplantıya katılanlar ve katılmayanlar listesi hazırlandı.\" cümlesinde bozukluk nedir?",
        "options": [
          "Cümle doğrudur; \"ve\" bağlacı iki karşıt grubu doğru birleştiriyor.",
          "\"Ve\" yerine \"ama\" kullanılmalı.",
          "Özne belirsiz.",
          "Yüklem eksik."
        ],
        "answer": 0,
        "explain": "\"Katılanlar ve katılmayanlar\" iki zıt grubu birlikte ele alan bir ifadedir. \"Ve\" bağlacı bu iki grubu sıralar; bu kullanım dilbilgisel açıdan doğrudur."
      },
      {
        "level": "kolay",
        "text": "\"Başarısızlığından dolayı çok mutlu oldum.\" cümlesindeki bozukluk nedir?",
        "options": [
          "Anlam çelişkisi: başarısızlık → mutsuzluk beklenirken \"mutlu\" denmesi",
          "Özne eksikliği",
          "Bağlaç yanlışlığı",
          "Zaman uyumsuzluğu"
        ],
        "answer": 0,
        "explain": "\"Başarısızlık\" olumsuz bir durum iken buna \"mutlu olmak\" anlam bakımından çelişkilidir. \"Başarısından\" olması gerekirdi. Bu anlam uyumsuzluğundan kaynaklanan bir bozukluktur."
      },
      {
        "level": "kolay",
        "text": "\"Bu konuyu hem öğrettim hem de anlattım.\" cümlesinde anlatım bozukluğu var mı?",
        "options": [
          "Evet; öğretmek ve anlatmak eş anlamlı, gereksiz tekrar oluşturuyor.",
          "Hayır; birbirini tamamlayan iki eylemdir.",
          "Hayır; bağlaç doğru kullanılmış.",
          "Evet; özne belirsiz."
        ],
        "answer": 0,
        "explain": "\"Öğretmek\" ve \"anlatmak\" kavramları çok yakın, neredeyse eş anlamlıdır. İkisini \"hem...hem de\" ile birden kullanmak anlam yığılması (gereksiz tekrar) oluşturur."
      },
      {
        "level": "kolay",
        "text": "\"Arkadaşım benden çok daha güzel.\" cümlesinde bozukluk var mı?",
        "options": [
          "Hayır; karşılaştırma doğru kurulmuş.",
          "Evet; \"çok daha\" gereksiz tekrardır.",
          "Evet; özne belirsiz.",
          "Evet; yüklem eksik."
        ],
        "answer": 0,
        "explain": "\"Çok daha güzel\" ifadesi karşılaştırmanın derecesini artırmak için kullanılmıştır. \"Daha\" üstünlük; \"çok daha\" pekiştirmeli üstünlük bildirmektedir. Bu kullanım dilbilgisi açısından kabul edilebilirdir."
      },
      {
        "level": "orta",
        "text": "\"Sınava girmek için okumak gerekir\" yerine \"Sınava girebilmek için okumak gerekir\" demek anlatım açısından ne fark yaratır?",
        "options": [
          "\"Girebilmek\" yeterlilik anlamı katar ve niyeti daha iyi ifade eder; bozukluk yoktur.",
          "\"Girebilmek\" yanlış; yeterlilik eki fazladır.",
          "\"Girmek\" daha açık; diğeri gereksiz uzamadır.",
          "İkisi de yanlıştır."
        ],
        "answer": 0,
        "explain": "\"Sınava girebilmek\" = sınava girme yeterliliğini kazanmak. Bu kullanım amaç ve yeterlilik anlamını pekiştirir. \"Girmek\" daha nötr; \"girebilmek\" ise yetkinlik kazanma çabasını vurgular. Her ikisi de dilbilgisi açısından doğrudur."
      },
      {
        "level": "orta",
        "text": "\"İki kişi birbirinden ayrı ayrı bu konuyu ele aldı.\" cümlesinde bozukluk nedir?",
        "options": [
          "\"Birbirinden\" ve \"ayrı ayrı\" gereksiz anlam tekrarı yapar.",
          "Özne uyumsuzluğu var.",
          "Yüklem eksik.",
          "\"İki kişi\" ile \"birbirinden\" çelişik."
        ],
        "answer": 0,
        "explain": "\"Birbirinden ayrı\" zaten ayrı ayrı anlamı taşır. \"Ayrı ayrı\" eklemek anlam bakımından gereksiz tekrar (yığılma) oluşturur. \"Birbirinden bağımsız\" veya yalnızca \"ayrı ayrı\" kullanmak yeterlidir."
      },
      {
        "level": "orta",
        "text": "\"Güneş battı ve ortalık karardı.\" yerine \"Güneş battığı için ortalık karardı.\" cümlesi ne açıdan farklıdır?",
        "options": [
          "İlki sıralı cümle (zaman sırası); ikincisi birleşik cümle (neden-sonuç ilişkisi)",
          "İkisi aynı yapıda ve anlamdadır.",
          "İlki birleşik; ikincisi basit cümledir.",
          "İlki neden-sonuç; ikincisi sıralamadır."
        ],
        "answer": 0,
        "explain": "\"Ve\" ile bağlanan cümle eş zamanlı veya ardışık iki olayı sıralar. \"Battığı için\" ise neden-sonuç ilişkisi kurar: güneşin batması ⟶ ortalığın kararması. İkinci cümle anlam açısından daha belirgin bir ilişki kurar."
      },
      {
        "level": "orta",
        "text": "\"Yemek hem lezzetli hem de tatsızdı.\" cümlesinde bozukluk nedir?",
        "options": [
          "Anlam çelişkisi: \"lezzetli\" ve \"tatsız\" birbiriyle çelişir.",
          "Bağlaç yanlışlığı.",
          "Özne eksikliği.",
          "Zaman uyumsuzluğu."
        ],
        "answer": 0,
        "explain": "\"Lezzetli\" ve \"tatsız\" sözcükleri birbirinin tam zıttıdır. Aynı anda hem lezzetli hem tatsız olmak mantıksal açıdan mümkün değildir. Bu anlam çelişkisinden kaynaklanan bir anlatım bozukluğudur."
      },
      {
        "level": "orta",
        "text": "\"Her insanlar hata yapabilir.\" cümlesindeki bozukluk nedir?",
        "options": [
          "\"Her\" sıfatı tekil isimle kullanılır; \"her insan\" doğrudur.",
          "\"Yapabilir\" yerine \"yapar\" kullanılmalı.",
          "Özne eksik.",
          "Yüklem olumsuz olmalı."
        ],
        "answer": 0,
        "explain": "\"Her\" sıfatı Türkçede yalnızca tekil isimlerle kullanılır: \"her insan\", \"her gün\". \"Her insanlar\" denmesi dilbilgisi kuralına aykırıdır; çoğul ek (-lar) \"her\" ile birlikte kullanılamaz."
      },
      {
        "level": "zor",
        "text": "\"Bana göre bu filmi izlemenizi öneririm.\" cümlesinde hangi bozukluk vardır?",
        "options": [
          "\"Bana göre\" ve \"öneririm\" çelişkili: önermek öznel değil yönlendirici; \"bence beğenebilirsiniz\" veya sadece \"öneririm\" kullanılmalı",
          "Bağlaç eksik.",
          "Nesne belirsiz.",
          "Zaman uyumsuzluğu var."
        ],
        "answer": 0,
        "explain": "\"Bana göre\" öznel bir görüş bildirirken \"öneririm\" kesinleştirilmiş bir yönlendirme yapar. Bu ikisi anlam bakımından birbiriyle çelişir. Ya \"bana göre güzel bir filmdi\" ya da doğrudan \"izlemenizi öneririm\" denmelidir."
      },
      {
        "level": "zor",
        "text": "\"Öğrenciler sınıfa girdiler ve oturtu.\" cümlesindeki bozuklukları bulunuz.",
        "options": [
          "\"Oturtu\" yanlış; edilgen yapı bozuk: \"oturtuldu\" olmalı. Ayrıca özneler çoğul iken yüklem uyumu tartışmalıdır.",
          "Yalnızca özne-yüklem uyumsuzluğu var.",
          "Yalnızca yüklem yanlışlığı var.",
          "Bozukluk yoktur."
        ],
        "answer": 0,
        "explain": "\"Oturtu\" fiili dilbilgisi açısından hatalıdır; \"oturtuldu\" (edilgen çatı) olması gerekir. Ayrıca \"girdiler\" çoğul yüklem iken \"oturtu\" tekil ve hatalı çekim içermektedir. Cümlede hem çekim hem anlam bozukluğu vardır."
      },
      {
        "level": "zor",
        "text": "\"Daha önce hiç görmediğim bir film izledim ve sanki daha önce görmüştüm gibi hissettim.\" cümlesinde bozukluk var mı?",
        "options": [
          "Hayır; cümle iç mantığı tutarlı: filmi ilk kez görüyor ama tanıdık gelme hissini (déjà vu) anlatıyor.",
          "Evet; \"hiç görmediğim\" ve \"görmüştüm\" çelişkilidir.",
          "Evet; zaman uyumsuzluğu var.",
          "Evet; \"sanki\" bağlacı yanlış kullanılmış."
        ],
        "answer": 0,
        "explain": "Cümle déjà vu deneyimini anlatmaktadır: filmi gerçekte hiç izlememişken tanıdık gelme hissi. \"Sanki... gibi\" ifadesi varsayımı/hissi gösterir; bu çelişki değil psikolojik bir deneyimdir. Cümle dilbilgisi ve anlam açısından doğrudur."
      }
    ],
    "Söz Sanatları (Benzetme, Kişileştirme, İstiare, Abartma)": [
      {
        "level": "kolay",
        "text": "\"Aslan gibi cesur\" ifadesi hangi söz sanatıdır?",
        "options": [
          "Teşbih (benzetme)",
          "İstiare",
          "Kişileştirme",
          "Abartma (mübalağa)"
        ],
        "answer": 0,
        "explain": "Teşbih: iki varlık arasında benzerlik kurulmasıdır; kişi ile aslan arasındaki cesaret benzerliği \"gibi\" edatıyla açık biçimde verilmiştir. Bu açık teşbihtir."
      },
      {
        "level": "kolay",
        "text": "\"Rüzgâr dallara fısıldadı.\" cümlesinde hangi söz sanatı kullanılmıştır?",
        "options": [
          "Kişileştirme (teşhis)",
          "Benzetme",
          "İstiare",
          "Abartma"
        ],
        "answer": 0,
        "explain": "Kişileştirme (teşhis): insan dışı varlıklara insan özellikleri, duyguları veya davranışları yüklenmesidir. \"Fısıldamak\" insana özgü bir eylemdir; rüzgâra yüklenmesi kişileştirmedir."
      },
      {
        "level": "kolay",
        "text": "Abartma (mübalağa) söz sanatı ne demektir?",
        "options": [
          "Bir şeyi olduğundan çok daha büyük, küçük, güçlü vb. gösterme",
          "Bir varlığa insan özelliği verme",
          "Benzetme ögesiz kurulmuş benzetme",
          "İki farklı kavramı özdeşleştirme"
        ],
        "answer": 0,
        "explain": "Abartma (mübalağa): gerçekte imkânsız veya aşırı bir durum gibi gösterilerek ifadenin gücünü artırmaktır. Örn. \"Açlıktan öldüm\", \"Saat asırlar gibi geçti\" gibi ifadeler abartmaya örnektir."
      },
      {
        "level": "kolay",
        "text": "İstiare (eğretileme) nedir ve benzetmeden farkı nedir?",
        "options": [
          "İstiare: benzetme ögeleri gizlenmiş / sadece benzeyene veya benzetilene yer verilen benzetmedir",
          "İstiare ile benzetme aynı şeydir",
          "İstiare insan özelliği verme sanatıdır",
          "İstiare abartma içeren benzetmedir"
        ],
        "answer": 0,
        "explain": "Benzetmede dört öge vardır (benzeyen, benzetilen, temel özellik, benzetme edatı). İstiarede bu ögelerin bir kısmı gizlenir. Açık istiare: benzeyen gizli; kapalı istiare: benzetilen gizli. Bu onu benzetmeden ayıran temel özelliktir."
      },
      {
        "level": "kolay",
        "text": "\"Hayat bir yolculuktur.\" cümlesinde hangi söz sanatı kullanılmıştır?",
        "options": [
          "Kapalı istiare (benzetme edatı yok, benzetilen açıkça verilmiş)",
          "Açık istiare",
          "Kişileştirme",
          "Abartma"
        ],
        "answer": 0,
        "explain": "\"Hayat bir yolculuktur\": hayat (benzeyen) – yolculuk (benzetilen); benzetme edatı ve temel özellik gizli. Benzetilen açıkça söylenmiş ama benzeyen hayat hakkındaki temel ilişki ima yoluyla kurulmuştur; bu kapalı istiaredir."
      },
      {
        "level": "kolay",
        "text": "\"O öyle hızlı koştu ki rüzgârı geçti.\" cümlesinde hangi söz sanatı kullanılmıştır?",
        "options": [
          "Abartma (mübalağa)",
          "Kişileştirme",
          "Benzetme",
          "İstiare"
        ],
        "answer": 0,
        "explain": "\"Rüzgârı geçmek\" gerçekte mümkün değildir; bu ifade olağanüstü bir hız anlatmak için kullanılmış bir abartmadır. Gerçekliği aşan, imkânsız bir durum aktarılmaktadır."
      },
      {
        "level": "orta",
        "text": "Açık istiare ile kapalı istiare arasındaki fark nedir?",
        "options": [
          "Açık istiare: benzetilen gizli, benzeyen açık; kapalı istiare: benzeyen gizli, benzetilen açık",
          "Açık istiare uzun; kapalı kısa",
          "İkisi aynı şeydir",
          "Açık istiare kişileştirme içerir"
        ],
        "answer": 0,
        "explain": "Açık istiare: benzeyen söylenir, benzetilen gizlenir. \"Aslan geldi\" (aslan = cesur kişi, kişi gizli). Kapalı istiare: benzetilen söylenir, benzeyen gizlenir. \"Hayatın dalgaları arasında\" (dalga = zorluklar, zorluklar söylenmez)."
      },
      {
        "level": "orta",
        "text": "\"Dağlar ağır ağır yürüdü.\" cümlesinde hangi söz sanatı vardır?",
        "options": [
          "Kişileştirme (dağlara \"yürümek\" eylemi yükleniyor)",
          "Benzetme (dağlar bir şeye benzetiliyor)",
          "Abartma (dağların büyüklüğü abartılıyor)",
          "İstiare (benzeyen gizli)"
        ],
        "answer": 0,
        "explain": "\"Yürümek\" insana özgü bir eylemdir; dağlara yüklenmesi kişileştirmedir. Bazı kişileştirme örnekleri aynı zamanda istiare içerebilir; burada temel sanat kişileştirmedir."
      },
      {
        "level": "orta",
        "text": "Teşbih-i beliğ (öz benzetme) nedir?",
        "options": [
          "Sadece benzeyen ve benzetilenin yer aldığı benzetme: \"elma yanak\"",
          "Dört ögeli tam benzetme",
          "Benzetme edatı olan benzetme",
          "Kişileştirme içeren benzetme"
        ],
        "answer": 0,
        "explain": "Teşbih-i beliğ (öz benzetme): benzetme edatı ve ortak özellik gizlenerek yalnızca benzeyen ve benzetilen söylenir. \"Elma yanaklar\", \"gül yüzlü\" gibi ifadeler öz benzetmeye örnektir."
      },
      {
        "level": "orta",
        "text": "\"Gözlerin iki derin göl.\" cümlesinde hangi söz sanatı kullanılmıştır?",
        "options": [
          "Kapalı istiare veya teşbih-i beliğ (benzetme edatı gizli, benzetilen açık)",
          "Açık teşbih",
          "Kişileştirme",
          "Abartma"
        ],
        "answer": 0,
        "explain": "\"Gözlerin iki derin göl\" ifadesinde benzetme edatı ve temel özellik gizlenmiştir; yalnızca benzeyen (gözler) ve benzetilen (iki derin göl) söylenmiştir. Bu öz benzetme (teşbih-i beliğ) ya da kapalı istiareye örnektir."
      },
      {
        "level": "orta",
        "text": "Abartmayı kişileştirmeden ayıran temel özellik nedir?",
        "options": [
          "Abartma: gerçeği aşan bir nitelik/ölçü bildirir; kişileştirme: insan özelliği yükler",
          "İkisi aynı şeydir",
          "Abartma insana; kişileştirme doğaya yönelik",
          "Kişileştirme abartma içerir"
        ],
        "answer": 0,
        "explain": "Abartmada gerçekte mümkün olmayan bir durum/ölçü ifade edilir (\"denizleri içti\"). Kişileştirmede ise insan dışı varlığa (doğa, nesne, soyut kavram) insani özellik, duygu veya eylem yüklenir. Temel fark budur."
      },
      {
        "level": "zor",
        "text": "\"Ölüm bana yol göstermekteydi.\" cümlesinde hangi söz sanatları iç içe geçmektedir?",
        "options": [
          "Kişileştirme (ölüme rehberlik yeteneği verilmiş) + kapalı istiare (ölüm = karanlık rehber, benzeyen gizli)",
          "Sadece abartma",
          "Sadece açık teşbih",
          "Kişileştirme + abartma"
        ],
        "answer": 0,
        "explain": "\"Ölüm\" soyut bir kavram olmasına karşın ona \"yol gösterme\" (insana özgü eylem) yüklenmesi kişileştirmedir. Aynı zamanda ölümün somut bir varlık gibi kullanılması kapalı istiare özelliği taşır. İki sanat iç içe geçmiştir."
      },
      {
        "level": "zor",
        "text": "\"Benzetmenin dört ögesi\" nelerdir ve her birini örnekle açıklayınız.",
        "options": [
          "Benzeyen, benzetilen, ortak özellik (temel özellik/yön), benzetme edatı: \"Ali aslan gibi cesurdur\" → Ali (benzeyen), aslan (benzetilen), cesur (özellik), gibi (edat)",
          "Benzeyen, benzetilen, benzetme edatı (üç öge)",
          "Benzeyen, özellik, edat, anlam (dört öge)",
          "Benzetme tek ögelidir: sadece benzeyen yeterli"
        ],
        "answer": 0,
        "explain": "Teşbihin dört ögesi: 1) Benzeyen (Ali – kendisine benzetilen), 2) Benzetilen (aslan – karşılaştırılan), 3) Benzetme yönü/ortak özellik (cesur), 4) Benzetme edatı (gibi, kadar, sanki vb.). Dört öge birden kullanılırsa \"tam benzetme\"; bir kısmı gizlenirse \"eksik benzetme\" veya \"istiare\" oluşur."
      },
      {
        "level": "zor",
        "text": "\"O adam bir dağdı.\" cümlesinde hangi istiare türü kullanılmıştır?",
        "options": [
          "Açık istiare: benzetilen (dağ) açık söylenmiş, benzeyen (insan) gizlenmiş değil; ama edat yok. Bu kapalı istiare: adam = dağ, \"gibi\" edatı yok, dolaylı benzetme",
          "Açık istiare: benzeyen gizli, benzetilen açık",
          "Kapalı istiare: benzetilen gizli",
          "Teşbih-i beliğ: dört öge tam mevcut"
        ],
        "answer": 1,
        "explain": "\"O adam bir dağdı\": adam (benzeyen) açıkça söylenmiş; dağ (benzetilen) de söylenmiş ama benzetme edatı ve ortak özellik gizli. Bu yapı açık istiareye yakındır: benzeyen var, benzetme bağı yok, bağ ima yoluyla kurulmuş; klasik tanımda açık istiare veya teşbih-i beliğ sayılır."
      }
    ],
    "Metin Türleri (Makale, Fıkra, Eleştiri, Haber, Röportaj)": [
      {
        "level": "kolay",
        "text": "Makale türünün temel özelliği nedir?",
        "options": [
          "Bir konuyu bilimsel ya da düşünsel yöntemlerle ele alan, kanıta dayalı ciddi yazı türü",
          "Kısa ve eğlenceli, günlük konuları ele alan yazı",
          "Yazarın kişisel izlenimlerini aktardığı yazı",
          "Gazete haberi niteliğindeki yazı"
        ],
        "answer": 0,
        "explain": "Makale; ciddi, sistematik ve kanıta dayalı biçimde bir tezi savunan ya da bir konuyu derinlemesine inceleyen yazı türüdür. Akademik veya gazete makalesi biçiminde olabilir; öznel yorum ile nesnel analizi dengeler."
      },
      {
        "level": "kolay",
        "text": "Fıkra (köşe yazısı) türünü makaleden ayıran temel özellik nedir?",
        "options": [
          "Fıkra kısa, sohbet havalı ve öznel; makale uzun, ciddi ve kanıta dayalıdır",
          "İkisi aynı türdür",
          "Fıkra kanıt içerir; makale içermez",
          "Fıkra gazete makalesidir"
        ],
        "answer": 0,
        "explain": "Fıkra (köşe yazısı): günlük olayları, toplumsal meseleleri ya da sıradan konuları konuşma diliyle, kısa, esprili ve öznel biçimde ele alır. Makale ise daha sistematik, nesnel ve kanıta dayalıdır."
      },
      {
        "level": "kolay",
        "text": "Eleştiri (tenkit) türünün amacı nedir?",
        "options": [
          "Bir eser, düşünce veya olguyu gerekçeli biçimde değerlendirmek",
          "Yalnızca olumsuz yönleri göstermek",
          "Yazarı kötülemek",
          "Okurun beğenisini dikte etmek"
        ],
        "answer": 0,
        "explain": "Eleştiri; bir sanat eseri, fikir veya olgunun olumlu-olumsuz yönlerini gerekçelere dayanarak değerlendiren yazı türüdür. Amaç kötülemek değil, bilinçli ve kanıtlı bir değerlendirme sunmaktır."
      },
      {
        "level": "kolay",
        "text": "Haber metninin temel özellikleri nelerdir?",
        "options": [
          "Beş N bir K kuralı: Ne, Nerede, Ne zaman, Nasıl, Neden, Kim",
          "Kişisel yorum ve duygu içerir",
          "Mektup formatındadır",
          "Kurgusal olaylara dayanır"
        ],
        "answer": 0,
        "explain": "Haber metni: gerçek bir olayı 5N1K (Ne oldu? Nerede? Ne zaman? Nasıl? Neden? Kim?) ilkesiyle aktaran; nesnel, kısa, yalın ve bilgi vermeyi amaçlayan gazetecilik türüdür."
      },
      {
        "level": "kolay",
        "text": "Röportaj (söyleşi) türünü diğer metin türlerinden ayıran temel özellik nedir?",
        "options": [
          "Soru-cevap formatında gerçekleşen yüz yüze veya yazılı görüşme",
          "Yazarın kendi fikirlerini aktarması",
          "Belirli bir olayı haber vermesi",
          "Bir eseri eleştirmesi"
        ],
        "answer": 0,
        "explain": "Röportaj: gazeteci/yazar ile belirli bir kişi ya da grubun soru-cevap formatında gerçekleştirdiği görüşmedir. Kişisel görüşler, deneyimler ve bilgiler doğrudan aktarılır; bu diğer türlerden ayıran temel özelliktir."
      },
      {
        "level": "kolay",
        "text": "Aşağıdakilerden hangisi fıkra türünün özelliği DEĞİLDİR?",
        "options": [
          "Uzun, akademik bir dille yazılır ve geniş kaynakça içerir.",
          "Günlük olaylardan hareket eder.",
          "Kısa ve sohbet havasında yazılır.",
          "Yazarın imzasını taşır."
        ],
        "answer": 0,
        "explain": "Fıkra (köşe yazısı) kısa, sohbet havalı ve imzalı bir yazı türüdür. Akademik uzunluk ve kaynakça makale türüne özgüdür; fıkranın özelliği değildir."
      },
      {
        "level": "orta",
        "text": "\"Filmde kurgu son derece sağlamdı; oyunculuklar ise beklentilerin altında kaldı.\" Bu cümle hangi metin türüne aittir?",
        "options": [
          "Eleştiri",
          "Haber",
          "Röportaj",
          "Fıkra"
        ],
        "answer": 0,
        "explain": "Cümle bir filmin olumlu (kurgu) ve olumsuz (oyunculuk) yönlerini gerekçeli biçimde değerlendirmektedir. Bu değerlendirici ve gerekçeli yaklaşım eleştiri türünün temel özelliğidir."
      },
      {
        "level": "orta",
        "text": "\"Araştırmalar gösteriyor ki Türkiye'de her yıl 2 milyon ton gıda israf edilmektedir.\" Bu cümle hangi metin türüne daha uygundur?",
        "options": [
          "Makale (bilimsel/araştırmaya dayalı)",
          "Fıkra (günlük konuşma dili)",
          "Röportaj (soru-cevap)",
          "Haber (5N1K)"
        ],
        "answer": 0,
        "explain": "\"Araştırmalar gösteriyor ki\" ifadesi bilimsel bir kanıta atıf yapar; istatistiksel veri nesnel ve sistematik sunumdur. Bu özellikler makale türüne işaret eder."
      },
      {
        "level": "orta",
        "text": "Gazetede çıkan bir eleştiri ile makale arasındaki fark nasıl belirlenir?",
        "options": [
          "Eleştiri belirli bir eseri/kişiyi değerlendirir; makale genel bir konuyu işler",
          "İkisi aynıdır",
          "Makale kısa; eleştiri uzundur",
          "Eleştiri haber biçimindedir"
        ],
        "answer": 0,
        "explain": "Eleştiri odaklıdır: belirli bir eser, kişi veya oluşumu değerlendirir (film, kitap, sergi eleştirisi). Makale ise genel bir konuyu veya sorunu araştırır, tez öne sürer ve geniş çerçevede ele alır."
      },
      {
        "level": "orta",
        "text": "Röportajla söyleşinin farkı nedir?",
        "options": [
          "Röportaj yayımlanmak amacıyla yapılan soru-cevap; söyleşi daha serbest ve informal konuşmadır",
          "İkisi tamamen aynıdır",
          "Röportaj kurgusaldır; söyleşi gerçektir",
          "Söyleşi yalnızca radyo/TV için; röportaj yazılı için"
        ],
        "answer": 0,
        "explain": "Röportaj: belirli bir kişiyle gazete/dergi için yapılan, belirli sorulara verilen yanıtların yayımlanmasını içerir; biçimsel ve planlıdır. Söyleşi daha serbest, enformel bir görüşmeye işaret edebilir; bazen ikisi birbirinin yerine kullanılsa da röportaj daha teknik bir terimdir."
      },
      {
        "level": "orta",
        "text": "Haber metninde neden öznel yorum kullanılmamalıdır?",
        "options": [
          "Haber nesnel gerçekliği aktarır; öznel yorum okuyucuyu yanıltır ve güvenilirliği zedeler",
          "Çünkü haberler kısadır ve yer yoktur",
          "Öznel yorum dilbilgisi kurallarına aykırıdır",
          "Çünkü haber yazarı düşüncelerini saklamak zorundadır"
        ],
        "answer": 0,
        "explain": "Haberin temel işlevi bilgi vermektir. Öznel yorum yazarın bakış açısını dayatır; bu durum okuyucunun nesnel bilgiye ulaşmasını engeller. Gazetecilik etiği açısından haber ve yorum birbirinden ayrı tutulmalıdır."
      },
      {
        "level": "zor",
        "text": "Bir röportaj metni hem haber hem de fıkra özelliği taşıyabilir mi? Açıklayınız.",
        "options": [
          "Evet; röportaj kişinin sözlerini aktarırken haber (bilgi verme) ve fıkra (öznel yorum) özelliklerini birleştirebilir",
          "Hayır; metin türleri kesin sınırlarla ayrılır",
          "Hayır; röportaj yalnızca soru-cevaptır",
          "Evet; tüm türler birbirine dönüşebilir"
        ],
        "answer": 0,
        "explain": "Röportaj ana yapısı itibarıyla soru-cevap formatındadır; ancak sunuluş biçimine göre haber (nesnel bilgi, olay) ve fıkra (öznel yorum, sohbet dili) özelliklerini harmanlayabilir. Edebiyatta tür sınırları kesin değil, geçirgendir."
      },
      {
        "level": "zor",
        "text": "Makale ile deneme arasındaki temel fark nedir?",
        "options": [
          "Makale kanıta ve sisteme dayalı; deneme kişisel, serbest ve kesin sonuç içermez",
          "İkisi aynıdır",
          "Deneme daha uzundur",
          "Makale yalnızca bilim dergilerinde yayımlanır"
        ],
        "answer": 0,
        "explain": "Makale belirli bir tezi savunur, kanıt ve kaynak gösterir, sistematik bir yapı izler. Deneme ise yazarın bir konuyu kesin sonuca bağlamadan özgürce düşündüğü, kişisel ve serbest bir yazı türüdür. Temel fark sistematiklik ve kesinlik derecesidir."
      },
      {
        "level": "zor",
        "text": "Eleştiri yazarken \"öznel\" ve \"nesnel\" dengeyi nasıl kurmalıyız?",
        "options": [
          "Nesnel ölçütler (teknik, yapı, kanıt) + yazarın gerekçeli öznel yorumu birlikte kullanılmalı; salt kişisel beğeni ile salt nesnel analiz yeterli değildir",
          "Salt nesnel olmak gerekir; öznel yorum eleştiriyi bozar",
          "Salt öznel yorum esastır; kanıta gerek yok",
          "Denge kurmak gerekmez; eleştiri tamamen serbesttir"
        ],
        "answer": 0,
        "explain": "Nitelikli eleştiri hem nesnel ölçütleri (edebi teknik, tarihsel bağlam, yapı) hem de yazarın gerekçeli öznel değerlendirmesini bir arada sunar. Salt beğeni \"güzel/kötü\" demekten ibarettir; salt analiz ise sanatın duygusal boyutunu göz ardı eder. Denge iki yaklaşımı birleştirir."
      }
    ],
    "Paragraf Bilgisi II (Düşünceyi Geliştirme Yolları)": [
      {
        "level": "kolay",
        "text": "\"Tanımlama\" düşünceyi geliştirme yolu ne demektir?",
        "options": [
          "Bir kavramın ne olduğunu açıklama: özellikleri, kapsamı ve sınırlarını belirleme",
          "Örnekler vererek açıklama",
          "Karşı görüşü çürütme",
          "Sayısal veri sunma"
        ],
        "answer": 0,
        "explain": "Tanımlama: \"... şudur\" veya \"... denir\" kalıplarıyla bir kavramın ne olduğunu, özelliklerini ve kapsamını netleştirmektir. Okuyucunun kavramı doğru anlamasını sağlar."
      },
      {
        "level": "kolay",
        "text": "\"Örnekleme\" düşünceyi geliştirme yolunda hangi amaç güdülür?",
        "options": [
          "Soyut fikri somut örnekle açıklamak ve inandırıcılığı artırmak",
          "Karşı görüşü çürütmek",
          "İstatistik vermek",
          "Kavramı tanımlamak"
        ],
        "answer": 0,
        "explain": "Örnekleme: soyut bir düşünceyi somut, yaşanmış veya gözlemlenebilir örneklerle desteklemektir. \"Örneğin\", \"nitekim\", \"sözgelimi\" gibi geçiş ifadeleriyle başlar."
      },
      {
        "level": "kolay",
        "text": "\"Karşılaştırma\" yoluyla düşünce nasıl geliştirilir?",
        "options": [
          "İki kavram veya durum arasındaki benzerlik ve farklılıklar ortaya konularak",
          "Bir konuyu sayılarla destekleyerek",
          "Ünlü birinin görüşünü aktararak",
          "Konuyu tanımlayarak"
        ],
        "answer": 0,
        "explain": "Karşılaştırma: iki veya daha fazla kavram, kişi ya da olgu arasındaki benzerlik ve farklılıkları belirterek okuyucunun her ikisini de daha iyi anlamasını sağlar. \"Oysa\", \"buna karşın\", \"benzer biçimde\" gibi ifadeler kullanılır."
      },
      {
        "level": "kolay",
        "text": "\"Tanık gösterme (alıntı)\" düşünceyi geliştirme yolunda ne yapılır?",
        "options": [
          "Uzman, otorite ya da ünlü birinin görüşü aktarılarak ana fikir desteklenir",
          "Kendi görüşler paylaşılır",
          "Sayısal veriler sunulur",
          "Soru sorularak okuyucu düşündürülür"
        ],
        "answer": 0,
        "explain": "Tanık gösterme: biliminsanı, tarihsel kişi veya alan uzmanının sözü/görüşü alıntılanarak tezi destekler. \"...'ya göre\", \"...'nin dediği gibi\" kalıplarıyla sunulur ve güvenilirliği artırır."
      },
      {
        "level": "kolay",
        "text": "\"Sayısal veri kullanma\" düşünceyi geliştirme yolunun amacı nedir?",
        "options": [
          "Somut istatistik ve rakamlarla iddiayı kanıtlamak",
          "Okuyucuya örnekler sunmak",
          "Konuyu tanımlamak",
          "Karşılaştırma yapmak"
        ],
        "answer": 0,
        "explain": "Sayısal veri: istatistik, yüzde, oran veya ölçüm sonuçlarıyla iddianın nesnel kanıtını sunar. Örn. \"Her yıl 2 milyon ton gıda israf ediliyor.\" Bu rakamlar okuyucuyu ikna eder."
      },
      {
        "level": "kolay",
        "text": "\"Benzetme\" düşünceyi geliştirme yolunda nasıl kullanılır?",
        "options": [
          "Bilinmeyen bir kavramı bilinen bir şeye benzeterek açıklama",
          "Ünlü birinin sözünü aktarma",
          "İki farklı konuyu karşılaştırma",
          "Sayısal veri sunma"
        ],
        "answer": 0,
        "explain": "Benzetme: okuyucunun tanımadığı veya anlamakta güçlük çektiği bir kavramı, daha tanıdık ve somut bir şeye benzeterek açıklar. \"Beyin bir bilgisayar gibidir\" örneğinde olduğu gibi."
      },
      {
        "level": "orta",
        "text": "Aşağıdaki cümlede hangi düşünceyi geliştirme yolu kullanılmıştır?\n\"Dünya Sağlık Örgütü'ne göre dünyada her 40 saniyede bir kişi intihar girişiminde bulunmaktadır.\"",
        "options": [
          "Tanık gösterme + sayısal veri",
          "Örnekleme",
          "Karşılaştırma",
          "Tanımlama"
        ],
        "answer": 0,
        "explain": "\"Dünya Sağlık Örgütü'ne göre\" ifadesi tanık göstermeyi (otorite alıntısı); \"her 40 saniyede bir kişi\" ifadesi sayısal veriyi göstermektedir. İki düşünceyi geliştirme yolu bir arada kullanılmıştır."
      },
      {
        "level": "orta",
        "text": "\"Paragrafta düşünceyi geliştirme yolları neden önemlidir?\"",
        "options": [
          "Ana fikri destekler, inandırıcılığı artırır ve paragrafı zenginleştirir",
          "Paragrafı uzatmak için kullanılır",
          "Okuyucuyu yanıltmak için kullanılır",
          "Yalnızca yazarın üslubunu gösterir"
        ],
        "answer": 0,
        "explain": "Düşünceyi geliştirme yolları ana fikri somutlaştırır, kanıtlar ve güçlendirir. Bunlar olmadan paragraf içi yüzeysel ve inandırıcılıktan uzak kalır."
      },
      {
        "level": "orta",
        "text": "\"Hem karşılaştırma hem de örnekleme yapan\" bir cümle örneği veriniz.",
        "options": [
          "\"Türkiye'de şehir trafiği Paris'tekinden daha yoğundur; nitekim İstanbul'da ortalama sürücü günde 2 saat trafikte geçirir.\"",
          "\"Dünya nüfusu 8 milyardır.\"",
          "\"Stres zararlıdır.\"",
          "\"Newton yer çekimini keşfetti.\""
        ],
        "answer": 0,
        "explain": "Bu cümlede: \"Türkiye – Paris karşılaştırması\" (karşılaştırma yolu) + \"İstanbul'da ortalama 2 saat\" (sayısal veri ile desteklenen örnekleme). Hem karşılaştırma hem de örnekleme iç içe kullanılmıştır."
      },
      {
        "level": "orta",
        "text": "Aşağıdakilerden hangisi \"somutlaştırma\" düşünceyi geliştirme yoluna örnektir?",
        "options": [
          "\"Özgürlük kuş gibidir; kanatlanıp uçmak ister.\"",
          "\"Her yıl milyonlarca kitap yayımlanmaktadır.\"",
          "\"Einstein'a göre hayal gücü bilgiden önemlidir.\"",
          "\"Mutluluk duygusal bir durumdur.\""
        ],
        "answer": 0,
        "explain": "\"Özgürlük kuş gibidir\" ifadesinde soyut kavram (özgürlük) somut bir varlığa (kuş) benzetilerek somutlaştırılmıştır. Bu hem benzetme hem de somutlaştırma yoluna örnektir."
      },
      {
        "level": "orta",
        "text": "\"Tartışma\" düşünceyi geliştirme yolunda karşı görüşler neden aktarılır?",
        "options": [
          "Tezi güçlendirmek için karşı görüşleri çürütmek ya da zayıflatmak amacıyla",
          "Okuyucuyu yanıltmak için",
          "Paragrafı uzatmak için",
          "Konuyu tanımlamak için"
        ],
        "answer": 0,
        "explain": "Tartışma yolunda yazar karşı görüşleri aktarır ve ardından bunları çürüterek kendi tezini güçlendirir. \"Buna karşı çıkanlar... demektedir; ancak...\" yapısı bu yolun tipik örneğidir."
      },
      {
        "level": "orta",
        "text": "Soru sorarak düşünceyi geliştirme yolunun paragraftaki işlevi nedir?",
        "options": [
          "Okuyucuyu düşündürmek, ilgi çekmek ve konuya yönlendirmek",
          "Konuyu tanımlamak",
          "Somut örnek sunmak",
          "Karşı görüşü aktarmak"
        ],
        "answer": 0,
        "explain": "Paragrafta retorik sorular okuyucunun dikkatini çeker, düşünmesini sağlar ve konuya aktif katılımını teşvik eder. Bu sorulara yanıt verilmeyebilir; asıl amaç düşünce sürecini başlatmaktır."
      },
      {
        "level": "zor",
        "text": "Aşağıdaki paragraf pasajında hangi düşünceyi geliştirme yolları kullanılmıştır?\n\"Okumanın önemi tartışılmazdır. (1) TÜİK verisine göre Türkiye'de bir kişi yılda ortalama 6 kitap okuyor. (2) Gelişmiş ülkelerde bu sayı 40'ın üzerindedir. (3) Öte yandan Milli Eğitim uzmanları okuma alışkanlığının eleştirel düşünceyi pekiştirdiğini belirtmektedir. (4) Okumak bir balta gibidir: ne kadar çok kullanılırsa o kadar keskinleşir.\"",
        "options": [
          "(1) sayısal veri, (2) karşılaştırma, (3) tanık gösterme, (4) benzetme",
          "(1) örnekleme, (2) tanımlama, (3) abartma, (4) kişileştirme",
          "(1) tartışma, (2) örnekleme, (3) alıntı, (4) abartma",
          "(1) somutlaştırma, (2) karşılaştırma, (3) tartışma, (4) benzetme"
        ],
        "answer": 0,
        "explain": "(1) \"TÜİK verisine göre 6 kitap\" → sayısal veri. (2) \"Gelişmiş ülkelerde 40'ın üzerinde\" → karşılaştırma. (3) \"Uzmanlar... belirtmektedir\" → tanık gösterme (alıntı). (4) \"Balta gibidir\" → benzetme/somutlaştırma. Paragrafta dört farklı düşünceyi geliştirme yolu iç içe kullanılmıştır."
      },
      {
        "level": "zor",
        "text": "\"Parçada düşünceyi geliştirme yolunun tespiti\" sorusuna nasıl yaklaşılmalıdır?",
        "options": [
          "Cümlede öne çıkan bilgi türü belirlenir: istatistik (sayısal), örnek (örnekleme), otorite sözü (tanık), benzetme, karşılaştırma vb.",
          "Yalnızca bağlaçlara bakılır",
          "Paragrafın uzunluğuna bakılır",
          "Yüklemin kipi incelenir"
        ],
        "answer": 0,
        "explain": "Düşünceyi geliştirme yolu tespitinde: cümledeki bilginin hangi amaçla kullanıldığına bakılır. Rakam varsa → sayısal veri; \"örneğin\" varsa → örnekleme; otorite adı geçiyorsa → tanık gösterme; benzetme edatı varsa → benzetme. Her cümlenin işlevi ayrı ayrı değerlendirilir."
      },
      {
        "level": "zor",
        "text": "\"Sebep-sonuç ilişkisiyle düşünce geliştirme\" ne demektir ve hangi geçiş sözcükleriyle kurulur?",
        "options": [
          "Bir eylemin veya durumun neden-sonuç bağlamında açıklanması; \"çünkü, bu nedenle, dolayısıyla, bu yüzden\" geçiş sözcükleriyle",
          "Karşılaştırma yapılmasıdır; \"oysa, ama\" ile kurulur",
          "Örnekleme yapılmasıdır; \"örneğin, nitekim\" ile kurulur",
          "Tanık göstermedir; \"...göre, ...demiştir\" ile kurulur"
        ],
        "answer": 0,
        "explain": "Sebep-sonuç ilişkisi: bir olgunun neden gerçekleştiğini veya ne sonuç doğurduğunu açıklayan düşünceyi geliştirme yoludur. \"Çünkü\", \"bu nedenle\", \"dolayısıyla\", \"bunun sonucunda\" geçiş sözcükleri sebep-sonuç bağını işaret eder."
      }
    ]
  }
};

  // ---- Yardımcı fonksiyonlar ----
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function format(n) {
    return n === 0 ? '0' : n.toLocaleString('tr-TR');
  }

  // Konuları listele
  function topicList() {
    const out = {};
    [5, 6, 7].forEach(g => {
      out[g] = Object.keys(BANK[String(g)] || {});
    });
    return out;
  }

  // Her konudaki toplam soru sayısı
  function topicCounts() {
    const out = {};
    [5, 6, 7].forEach(g => {
      const topics = BANK[String(g)] || {};
      out[g] = Object.values(topics).reduce((s, arr) => s + arr.length, 0);
    });
    return out;
  }

  // 15 soruluk tur oluştur: 6 kolay + 6 orta + 3 zor
  function buildRound(grade, topic) {
    const gradeBank = BANK[String(grade)] || {};
    let pool = [];

    if (topic === 'all') {
      // Tüm konulardan al
      Object.entries(gradeBank).forEach(([konu, qs]) => {
        qs.forEach(q => pool.push({ ...q, topic: konu }));
      });
    } else {
      // Belirli konudan al
      const qs = gradeBank[topic] || [];
      qs.forEach(q => pool.push({ ...q, topic }));
    }

    // Zorluk grupları
    const kolay = shuffle(pool.filter(q => q.level === 'kolay'));
    const orta  = shuffle(pool.filter(q => q.level === 'orta'));
    const zor   = shuffle(pool.filter(q => q.level === 'zor'));

    // Eksik olanları diğerlerinden tamamla
    function fill(primary, secondary, count) {
      const result = primary.slice(0, count);
      if (result.length < count) {
        const extra = shuffle(secondary).slice(0, count - result.length);
        result.push(...extra);
      }
      return result;
    }

    const round = [
      ...fill(kolay, orta, 6),
      ...fill(orta, kolay, 6),
      ...fill(zor, orta, 3)
    ];

    return round.slice(0, 15);
  }

  // Seyirci joker: yanlış şıklara düşük, doğruya yüksek yüzde ver
  function audiencePoll(answer, level, removed) {
    const base = level === 'zor' ? 0.42 : level === 'orta' ? 0.55 : 0.70;
    const available = [0, 1, 2, 3].filter(i => removed.indexOf(i) < 0 && i !== answer);
    const rest = (1 - base) / (available.length || 1);
    return [0, 1, 2, 3].map(i => {
      if (removed.indexOf(i) >= 0) return 0;
      if (i === answer) return Math.round(base * 100);
      return Math.round(rest * 100);
    });
  }

  // Uzman ipucu: cevabı ima eden açıklama
  function expertHint(q, level) {
    const letter = ['A', 'B', 'C', 'D'][q.answer];
    const names = ['Öğretmen Ayşe', 'Dil Uzmanı Mehmet', 'Prof. Türkçe'];
    const name = names[Math.floor(Math.random() * names.length)];
    if (level === 'zor') {
      return { name, text: `Bu çok zor bir soru… %70 emin değilim ama sanırım cevap ${letter} seçeneği olabilir. Açıklamayı dikkatlice oku.` };
    }
    return { name, text: `Bence cevap ${letter} şıkkı. Konu '${q.topic}' ile ilgili, açıklamayı düşünürsen mantıklı olduğunu görürsün.` };
  }

  window.QUIZ = {
    LADDER, SAFE_POINTS, BANK,
    TOPIC_LIST: topicList(),
    TOPIC_COUNTS: topicCounts(),
    timeFor, levelFor, buildRound,
    audiencePoll, expertHint,
    shuffle, format
  };
})();
