import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
    try {
        const response = await axios.get(
            'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
        );

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return NextResponse.json(
            { success: false, error: 'Erro ao buscar produtos' },
            { status: 500 }
        );
    }
}

