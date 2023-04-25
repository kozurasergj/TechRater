import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewModel } from '../../interface/product.interface';

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	review: ReviewModel;
}