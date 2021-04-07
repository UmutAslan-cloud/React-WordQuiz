/**
 * Bu odevimizde bizden bir kelime oyunu yapmamiz isteniyor.
 * Kelime oyununda Almanca verilen kelimenin ingilizce karsiliklari karisik olarak verilicek
 * Verilen kelimelerden bir tanesi Almanca kelimenin dogru karsiligi olucak
 * Bir next butonu ile sonraki soruya gecilicek 
 * Cevaplar dogru ise true kismi yanlis ise false kismi skorlandirmayi gerceklestiricek
 * 
 * Technical Details
 * Oncelikle bir soru arrayi olustruacagiz
 * bu soru arrayinda sorunun kendisi siklar ve cevap olacak
 * olusturdugumuz sayfamizda bir next butonu ve question kismi olucak
 * State olarak olsturdugmuz count degiskeni bize hem bulundugumuz soru sayisini gosteren Question bolumunu
 * Hem Next dugmesine basinca bir sonraki soruya gecme asamasinda bize yardimci olacak.
 * State olarak olusturdugumuz plus minus degiskenleri ise bizlere dogru ve yanlis soru kisminda yardimci olacak
 */
import './App.css';
import HeaderComp from "./components/Header"
import Question from "./components/Question"



function App() {
  
  return (
    <div className="App">
    <HeaderComp/>
    <Question/>
     
    </div>
  );
}

export default App;
