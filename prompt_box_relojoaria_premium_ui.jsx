import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Undo2, Redo2, Code2, Eye, Share2 } from "lucide-react";

export default function PromptBoxUI() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">
          PromptBox de Relojoaria Premium v7.0
        </h1>
        <div className="flex gap-3">
          <Cloud className="w-5 h-5 text-gray-500" />
          <Undo2 className="w-5 h-5 text-gray-500" />
          <Redo2 className="w-5 h-5 text-gray-500" />
          <Code2 className="w-5 h-5 text-gray-500" />
          <Eye className="w-5 h-5 text-gray-500" />
          <Share2 className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Main */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold italic">PromptBox</h2>
        <p className="text-gray-500 mt-2">
          Biblioteca premium de prompts e setups para fotografia de relojoaria de alto padrão
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {/* Card 01 */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3">
              01. The Master Hero Shot
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Editorial close-up de um relógio de luxo em estilo publicitário premium.
              Iluminação com softbox difuso superior esquerdo, contraste com negative fill
              e textura ultra nítida em metal escovado.
            </p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
              Usar Prompt
            </Button>
          </CardContent>
        </Card>

        {/* Card 02 */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3">
              02. Biblioteca de Prompts
            </h3>
            <p className="text-sm text-gray-600">
              Templates prontos para fotografia de produtos premium com padrão de estúdio,
              macro detalhado e estética editorial dramática.
            </p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
              Explorar
            </Button>
          </CardContent>
        </Card>

        {/* Card 03 */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3">
              03. Guia de Setups de Luz
            </h3>
            <p className="text-sm text-gray-600">
              Escolha entre strip light, softbox frontal, rim light ou low-key dramático
              para obter o efeito ideal em produtos metálicos.
            </p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
              Ver Guia
            </Button>
          </CardContent>
        </Card>

        {/* Card 04 */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3">
              04. Video & Technical Suite
            </h3>
            <p className="text-sm text-gray-600">
              Revelações cinematográficas, reconstrução macro e correções técnicas
              avançadas para máxima qualidade visual.
            </p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
              Aplicar
            </Button>
          </CardContent>
        </Card>

        {/* Card 05 */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3">
              05. Professional Secrets
            </h3>
            <p className="text-sm text-gray-600">
              Técnicas como regra 10:10, double diffusion e CPL para controle total
              de reflexos e simetria.
            </p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
              Aprender
            </Button>
          </CardContent>
        </Card>

        {/* Card 06 */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3">
              06. Aplicação Comercial
            </h3>
            <p className="text-sm text-gray-600">
              Estratégias para e-commerce, atacado e campanhas que aumentam
              conversão e percepção de valor.
            </p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
              Ver Estratégias
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
