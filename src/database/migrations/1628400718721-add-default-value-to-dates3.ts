import {MigrationInterface, QueryRunner} from "typeorm";

export class addDefaultValueToDates31628400718721 implements MigrationInterface {
    name = 'addDefaultValueToDates31628400718721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users_details\` CHANGE \`name\` \`name\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users_details\` CHANGE \`created_at\` \`created_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users_details\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users_details\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users_details\` CHANGE \`created_at\` \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users_details\` CHANGE \`name\` \`name\` varchar(50) NOT NULL`);
    }

}
