import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Resimler from '@/models/Resimler';

export async function GET() {
  try {
    await connectToDatabase();

    // Önceki kayıtları temizleyelim (Opsiyonel - sadece temiz bir başlangıç için)
    await Resimler.deleteMany({});

    // Cloudinary örnek URL'lerini içeren bir kayıt oluşturalım
    const sampleRecord = await Resimler.create({
      implantdistedavi: "https://res.cloudinary.com/demo/image/upload/v1612345678/implantdistedavi.jpg",
      zirkonyumkaplama: "https://res.cloudinary.com/demo/image/upload/v1612345678/zirkonyumkaplama.jpg",
      disbeyazlatma: "https://res.cloudinary.com/demo/image/upload/v1612345678/disbeyazlatma.jpg",
      disetitedavisi: "https://res.cloudinary.com/demo/image/upload/v1612345678/disetitedavisi.jpg",
      estetikdishekimligi: "https://res.cloudinary.com/demo/image/upload/v1612345678/estetikdishekimligi.jpg",
      agizdisvecenecerrahisi: "https://res.cloudinary.com/demo/image/upload/v1612345678/agizdiscenecerrah.jpg",
      ortodonti: "https://res.cloudinary.com/demo/image/upload/v1612345678/ortodonti.jpg",
      protezler: "https://res.cloudinary.com/demo/image/upload/v1612345678/protezdis.jpg",
      kanaltedavisi: "https://res.cloudinary.com/demo/image/upload/v1612345678/kanaltedavisi.jpg",
      pedodonti: "https://res.cloudinary.com/demo/image/upload/v1612345678/pedodonti.jpg",
      geneldisbakimi: "https://res.cloudinary.com/demo/image/upload/v1612345678/geneldisbakimi.jpg",
      agizkokusu: "https://res.cloudinary.com/demo/image/upload/v1612345678/agizkokusu.jpg",
      // Ana Sayfa & Hakkımızda vb. yerlerde kullanılan genel görseller
      dentistvemusterisimutlu: "https://res.cloudinary.com/demo/image/upload/v1612345678/dentistvemusterisimutlu.jpg",
      klinikbeklemeodasi: "https://res.cloudinary.com/demo/image/upload/v1612345678/klinikbeklemeodasi.jpg",
      klinikfoto1: "https://res.cloudinary.com/demo/image/upload/v1612345678/klinikfoto1.jpg",
      // favicon için
      favicon: "https://res.cloudinary.com/demo/image/upload/v1612345678/favicon.png",
      _description: "Bu kayıt Cloudinary resim URL'lerini tutmak için otomatik oluşturulmuştur."
    });

    return NextResponse.json({
      success: true,
      message: "Örnek görseller veritabanına başarıyla kaydedildi.",
      data: sampleRecord
    });
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
