import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Pizza de Mussarela',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do produto',
    example: 'Pizza mussarela com molho de tomate',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do produto',
    example: '10.00',
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'URL da imagem do produto',
    example: 'https://picsum.photos/200/300',
  })
  image: string;
}
