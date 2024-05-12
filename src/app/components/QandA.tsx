import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const QandA = () => {
  return (
    <section className='bg-[#F5F5F5] pb-24 pt-12'>
      <div className='container'>
        <h2 className='text-center text-3xl font-medium'>常見 Q & A</h2>
        <Accordion type='single' defaultValue='item-1' collapsible className='mx-auto w-[900px]'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>使用毛爸媽平台預約服務需要支付額外的手續費嗎？</AccordionTrigger>
            <AccordionContent>
              在毛爸媽平台上預約任何服務,您只需支付服務本身的費用,我們不會收取額外的手續費。我們的宗旨是提供透明、公正的價格,讓每位寵物主人都能輕鬆為愛寵找到最適合的服務,無需擔心隱藏費用。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>如何確保預約的服務人員是資質可靠的？</AccordionTrigger>
            <AccordionContent>
              我們對所有合作的服務人員進行嚴格的背景審查和專業培訓。每位服務人員都必須通過我們的資質認證,包括技能測試和信譽評估。此外,我們鼓勵用戶在服務完成後留下評價,以持續監控和保證服務品質。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>如果對服務不滿意,我該怎麼辦？</AccordionTrigger>
            <AccordionContent>
              若您對提供的服務感到不滿意,我們建議首先與服務提供者溝通,尋找解決方案。如果問題仍未解決,您可以通過我們的客服系統提交投訴,我們將進行調查並採取相應的補救措施,包括退款或重新安排服務,以確保您的權益得到保障。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>毛爸媽平台提供哪些類型的寵物服務？</AccordionTrigger>
            <AccordionContent>
              毛爸媽平台提供全方位的寵物服務,包括但不限於陪伴散步、到府洗澡、寵物照護和專業攝影等。我們旨在成為一站式的寵物服務平台,滿足您所有的寵物照護需求,無論是日常照顧還是特殊需求,您都可以在我們的平台上找到合適的服務。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default QandA;
