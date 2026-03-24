import ChalkmdArticle, { meta as chalkmdMeta } from "./chalkmd.mdx";
import MechaMayhemArticle, { meta as mechaMayhemMeta } from "./mecha-mayhem.mdx";
import EventControlArticle, { meta as eventControlMeta } from "./event-control.mdx";
import ChoochooArticle, { meta as choochooMeta } from "./choochoo.mdx";
import BiztechArticle, { meta as biztechMeta } from "./biztech.mdx";
import PolarisArticle, { meta as polarisMeta } from "./polaris.mdx";
import OnivaArticle, { meta as onivaMeta } from "./oniva.mdx";
import MpgaArticle, { meta as mpgaMeta } from "./mpga.mdx";
import CylArticle, { meta as cylMeta } from "./cyl.mdx";
import ExamifaiArticle, { meta as examifaiMeta } from "./examifai.mdx";
import SwcdbArticle, { meta as swcdbMeta } from "./swcdb.mdx";
import VexArticle, { meta as vexMeta } from "./vex.mdx";
import BombPartyArticle, { meta as bombPartyMeta } from "./bomb-party.mdx";

export const articles = [
    {
        ...chalkmdMeta,
        Component: ChalkmdArticle
    },
    {
        ...mechaMayhemMeta,
        Component: MechaMayhemArticle
    },
    {
        ...eventControlMeta,
        Component: EventControlArticle
    },
    {
        ...choochooMeta,
        Component: ChoochooArticle
    },
    {
        ...biztechMeta,
        Component: BiztechArticle
    },
    {
        ...polarisMeta,
        Component: PolarisArticle
    },
    {
        ...onivaMeta,
        Component: OnivaArticle
    },
    {
        ...mpgaMeta,
        Component: MpgaArticle
    },
    {
        ...cylMeta,
        Component: CylArticle
    },
    {
        ...examifaiMeta,
        Component: ExamifaiArticle
    },
    {
        ...swcdbMeta,
        Component: SwcdbArticle
    },
    {
        ...vexMeta,
        Component: VexArticle
    },
    {
        ...bombPartyMeta,
        Component: BombPartyArticle
    }
];

export function getArticleById(id) {
    return articles.find((article) => article.id === id);
}


