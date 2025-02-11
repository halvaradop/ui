import { Title, Canvas, Subtitle, Controls } from "@storybook/blocks"

interface DocsPageProps {
    subtitle: string
}

export const DocsPage = ({ subtitle }: DocsPageProps) => {
    return (
        <>
            <Title />
            <Subtitle>{subtitle}</Subtitle>
            <Canvas />
            <Controls />
        </>
    )
}
