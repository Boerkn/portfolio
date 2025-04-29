import {ReactNode} from 'react';
import './globals.css';

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({children}: Props) {
  return children;
}