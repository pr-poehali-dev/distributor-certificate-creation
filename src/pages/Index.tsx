import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Index() {
  const [certificateData, setCertificateData] = useState({
    title: 'CERTIFICATE',
    englishText: `The certificate certifies that «Agroresurs» Company (Chelyabinsk, Russia) is the official dealer on the premises of Russian Federation with the authorized rights for sale and maintenance service of retail equipment and food machinery of «Harbin Golden Happiness Commercial Machinery Co., Ltd.» Harbin, China under the contract 1 dated as of 09.06.2008 between «Giness Co., Ltd.» and «Harbin Golden Happiness Commercial Machinery Co., Ltd.». The certificate is issued on 01.01.2009`,
    companyNameEn: 'Harbin Golden Happiness Commercial Machinery Co., Ltd',
    dateEn: 'Jan 1, 2009',
    chineseTitle: '证    书',
    chineseText: '本证书兹授权俄罗斯车里亚宾斯克 Agroresurs 公司为中国哈尔滨金乐商业机械有限公司在俄罗斯联邦境内的官方销售服务商。授权该公司在双方于2008年6月9日签订的第一号合同框架下，在俄罗斯联邦境内销售和维修我公司所生产的系列产品。本证书生效日期：2009年1月1日。',
    companyNameCn: '哈尔滨金乐商业机械有限公司',
    dateCn: '2009年1月1日'
  });

  const handleExport = () => {
    const certificate = document.getElementById('certificate-preview');
    if (!certificate) return;

    const canvas = document.createElement('canvas');
    const scale = 3;
    canvas.width = certificate.offsetWidth * scale;
    canvas.height = certificate.offsetHeight * scale;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(scale, scale);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const link = document.createElement('a');
    link.download = 'certificate.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Certificate Generator
          </h1>
          <p className="text-muted-foreground">Создайте элегантный сертификат с редактируемыми полями</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6">
              <Tabs defaultValue="english" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="english">English</TabsTrigger>
                  <TabsTrigger value="chinese">中文</TabsTrigger>
                </TabsList>

                <TabsContent value="english" className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={certificateData.title}
                      onChange={(e) => setCertificateData({ ...certificateData, title: e.target.value })}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="englishText">Certificate Text</Label>
                    <Textarea
                      id="englishText"
                      value={certificateData.englishText}
                      onChange={(e) => setCertificateData({ ...certificateData, englishText: e.target.value })}
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="companyNameEn">Company Name</Label>
                    <Input
                      id="companyNameEn"
                      value={certificateData.companyNameEn}
                      onChange={(e) => setCertificateData({ ...certificateData, companyNameEn: e.target.value })}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="dateEn">Date</Label>
                    <Input
                      id="dateEn"
                      value={certificateData.dateEn}
                      onChange={(e) => setCertificateData({ ...certificateData, dateEn: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="chinese" className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="chineseTitle">标题</Label>
                    <Input
                      id="chineseTitle"
                      value={certificateData.chineseTitle}
                      onChange={(e) => setCertificateData({ ...certificateData, chineseTitle: e.target.value })}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="chineseText">证书内容</Label>
                    <Textarea
                      id="chineseText"
                      value={certificateData.chineseText}
                      onChange={(e) => setCertificateData({ ...certificateData, chineseText: e.target.value })}
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="companyNameCn">公司名称</Label>
                    <Input
                      id="companyNameCn"
                      value={certificateData.companyNameCn}
                      onChange={(e) => setCertificateData({ ...certificateData, companyNameCn: e.target.value })}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="dateCn">日期</Label>
                    <Input
                      id="dateCn"
                      value={certificateData.dateCn}
                      onChange={(e) => setCertificateData({ ...certificateData, dateCn: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            <Button onClick={handleExport} className="w-full" size="lg">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать сертификат
            </Button>
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <Card className="p-2 bg-white shadow-2xl">
              <div
                id="certificate-preview"
                className="aspect-[1280/900] bg-gradient-to-br from-amber-50 to-orange-50 p-8 relative overflow-hidden"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpattern id='wave' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0,50 Q25,30 50,50 T100,50' fill='none' stroke='%23D4AF37' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3Crect width='100' height='100' fill='url(%23wave)'/%3E%3C/svg%3E")`
                }}
              >
                <div className="absolute inset-0 border-[12px] border-transparent" 
                  style={{
                    borderImage: 'linear-gradient(135deg, #D4AF37 0%, #8B7355 50%, #D4AF37 100%) 1',
                    boxShadow: 'inset 0 0 0 3px rgba(212, 175, 55, 0.3)'
                  }}
                />
                
                <div className="relative h-full flex flex-col justify-between p-8">
                  <div className="text-center space-y-6">
                    <h1 
                      className="text-6xl font-bold tracking-wider"
                      style={{ 
                        fontFamily: 'Playfair Display, serif',
                        color: '#8B1A1A',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      {certificateData.title}
                    </h1>
                    
                    <div 
                      className="text-sm leading-relaxed mx-auto max-w-3xl"
                      style={{ 
                        fontFamily: 'Noto Serif, serif',
                        color: '#1a1a1a'
                      }}
                    >
                      {certificateData.englishText}
                    </div>
                    
                    <div className="flex justify-center items-center space-x-4 py-4">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                          <Icon name="Award" size={40} className="text-white" />
                        </div>
                      </div>
                    </div>

                    <div 
                      className="text-base"
                      style={{ 
                        fontFamily: 'Noto Serif, serif',
                        color: '#1a1a1a'
                      }}
                    >
                      {certificateData.companyNameEn}
                    </div>
                    <div 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'Noto Serif, serif',
                        color: '#666'
                      }}
                    >
                      {certificateData.dateEn}
                    </div>
                  </div>

                  <div className="text-center space-y-4 border-t-2 border-amber-400/30 pt-6">
                    <h2 
                      className="text-4xl font-bold tracking-widest"
                      style={{ 
                        fontFamily: 'Noto Serif, serif',
                        color: '#1a1a1a'
                      }}
                    >
                      {certificateData.chineseTitle}
                    </h2>
                    
                    <div 
                      className="text-sm leading-relaxed mx-auto max-w-3xl"
                      style={{ 
                        fontFamily: 'Noto Serif, serif',
                        color: '#1a1a1a'
                      }}
                    >
                      {certificateData.chineseText}
                    </div>
                    
                    <div className="flex justify-center items-center space-x-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg border-4 border-amber-400">
                          <Icon name="Star" size={32} className="text-amber-300 fill-amber-300" />
                        </div>
                      </div>
                    </div>

                    <div 
                      className="text-base font-semibold"
                      style={{ 
                        fontFamily: 'Noto Serif, serif',
                        color: '#1a1a1a'
                      }}
                    >
                      {certificateData.companyNameCn}
                    </div>
                    <div 
                      className="text-sm"
                      style={{ 
                        fontFamily: 'Noto Serif, serif',
                        color: '#666'
                      }}
                    >
                      {certificateData.dateCn}
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-amber-500/50" />
                <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-amber-500/50" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-amber-500/50" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-amber-500/50" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
