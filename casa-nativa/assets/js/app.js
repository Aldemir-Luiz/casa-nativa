// Dados Iniciais dos 8 Produtos da Casa Nativa
const PRODUTOS_INICIAIS = [
    {
        id: 1,
        nome: "Sofá modular Aurora",
        categoria: "Sofás",
        preco: 2990.00,
        precoPromocional: 2990.00,
        descricao: "Dois módulos que se adaptam à sala e à sua rotina. Assento confortável e tecido de toque natural.",
        imagem: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
        estoque: 8,
        visivel: true
    },
    {
        id: 2,
        nome: "Poltrona Raiz",
        categoria: "Poltronas",
        preco: 1490.00,
        precoPromocional: null,
        descricao: "Madeira clara com tecido verde-oliva. Design leve e acolhedor.",
        imagem: "https://images.unsplash.com/photo-1580481072645-022f9a6d8310?auto=format&fit=crop&w=600&q=80",
        estoque: 12,
        visivel: true
    },
    {
        id: 3,
        nome: "Mesa de jantar Brisa",
        categoria: "Mesas",
        preco: 1890.00,
        precoPromocional: null,
        descricao: "Madeira clara com acabamento fosco. Espaço ideal para reunir e compartilhar refeições.",
        imagem: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=600&q=80",
        estoque: 6,
        visivel: true
    },
    {
        id: 4,
        nome: "Cadeira Curva",
        categoria: "Cadeiras",
        preco: 590.00,
        precoPromocional: null,
        descricao: "Estrutura em madeira clara com assento em palha natural.",
        imagem: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
        estoque: 24,
        visivel: true
    },
    {
        id: 5,
        nome: "Estante Horizonte",
        categoria: "Estantes",
        preco: 1290.00,
        precoPromocional: null,
        descricao: "Estrutura leve com prateleiras abertas para livros e objetos afetivos.",
        imagem: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=600&q=80",
        estoque: 9,
        visivel: true
    },
    {
        id: 6,
        nome: "Aparador Trama",
        categoria: "Aparadores",
        preco: 990.00,
        precoPromocional: null,
        descricao: "Madeira clara com detalhe de portas em palha trançada.",
        imagem: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",
        estoque: 7,
        visivel: true
    },
    {
        id: 7,
        nome: "Mesa lateral Pingo",
        categoria: "Mesas",
        preco: 390.00,
        precoPromocional: null,
        descricao: "Mesa de apoio compacta em madeira clara com tampo arredondado.",
        imagem: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=600&q=80",
        estoque: 18,
        visivel: true
    },
    {
        id: 8,
        nome: "Banco Ninho",
        categoria: "Bancos",
        preco: 690.00,
        precoPromocional: null,
        descricao: "Banco de linhas simples com assento estofado para a entrada ou pé de cama.",
        imagem: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=600&q=80",
        estoque: 10,
        visivel: true
    }
];

// Inicialização do localStorage
function inicializarDados() {
    if (!localStorage.getItem('casanativa_produtos')) {
        localStorage.setItem('casanativa_produtos', JSON.stringify(PRODUTOS_INICIAIS));
    }
    if (!localStorage.getItem('casanativa_mensagens')) {
        localStorage.setItem('casanativa_mensagens', JSON.stringify([]));
    }
}

// Funções para Gerir Produtos
function obterProdutos() {
    return JSON.parse(localStorage.getItem('casanativa_produtos')) || [];
}

function salvarProdutos(produtos) {
    localStorage.setItem('casanativa_produtos', JSON.stringify(produtos));
}

function adicionarProduto(novoProduto) {
    const produtos = obterProdutos();
    novoProduto.id = Date.now();
    produtos.push(novoProduto);
    salvarProdutos(produtos);
}

function editarProduto(id, produtoAtualizado) {
    let produtos = obterProdutos();
    produtos = produtos.map(p => p.id === Number(id) ? { ...p, ...produtoAtualizado } : p);
    salvarProdutos(produtos);
}

function removerProduto(id) {
    let produtos = obterProdutos();
    produtos = produtos.filter(p => p.id !== Number(id));
    salvarProdutos(produtos);
}

// Funções para Gerir Mensagens de Contacto
function obterMensagens() {
    return JSON.parse(localStorage.getItem('casanativa_mensagens')) || [];
}

function enviarMensagem(mensagem) {
    const mensagens = obterMensagens();
    mensagem.id = Date.now();
    mensagem.data = new Date().toLocaleDateString('pt-BR');
    mensagem.lida = false;
    mensagens.push(mensagem);
    localStorage.setItem('casanativa_mensagens', JSON.stringify(mensagens));
}

// Executa a inicialização ao carregar o script
inicializarDados();