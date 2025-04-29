import {Locale} from "next-intl";

type Props = {
    params: Promise<{locale: Locale}>;
};

export default async function IndexPage({params}: Props) {
    return (
        <p>{(await params).locale}</p>
    );
}