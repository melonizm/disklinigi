import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://disci:MlhKrtgz2552@cluster0.hyuoaiz.mongodb.net/";

const realData = {
  disbeyazlatma: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738101/disbeyazlatma_nidrcd.png",
  zirkonyumkaplama: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738101/zirkonyumkaplama_s4xjhk.jpg",
  pedodonti: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738101/Pedodonti_ipkp08.png",
  protezler: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738101/protezdis_vuaaae.webp",
  ortodonti: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738099/ortodonti_pxogoq.jpg",
  implantdistedavi: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738099/implantdistedavisi_x9kqqb.png",
  klinikfoto1: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738098/klinikfoto1_pkggbc.jpg",
  klinikbeklemeodasi: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738098/klinikbeklemeodasi_lt43ca.jpg",
  kanaltedavisi: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738098/kanaltedavisi_fgltuw.webp",
  geneldisbakimi: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738095/geneldisbakim_cyrca6.webp",
  favicon: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738095/favicon_mnpifk.png",
  agizdisvecenecerrahisi: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738094/agizdiscenecerrah_nnjzty.png",
  estetikdishekimligi: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738094/Estetik-Dis-Hekimligi1_gfsjhq.jpg",
  agizkokusu: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738093/agizkokusugiderme_tjmzqp.jpg",
  disetitedavisi: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738091/disetitedavisi_amahj4.webp",
  dentistvemusterisimutlu: "https://res.cloudinary.com/dr3nlusdb/image/upload/v1782738091/dentistvemusterisimutlu_cbvfx8.jpg",
  _description: "Real Cloudinary images updated by AI"
};

async function clearData(collection) {
    console.log("Veriler siliniyor...");
    await collection.deleteMany({});
    console.log("Mevcut tüm resim verileri başarıyla silindi!");
}

async function uploadData(collection) {
    console.log("Yeni veriler yükleniyor...");
    await collection.insertOne(realData);
    console.log("Yeni Cloudinary resim verileri başarıyla yüklendi!");
}

async function main() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('resimler');
        const collection = db.collection('resimler');
        
        // Önce verileri sil
        await clearData(collection);
        
        // Sonra verileri yeniden yükle
        await uploadData(collection);
        
    } catch (e) {
        console.error("Bir hata oluştu:", e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
