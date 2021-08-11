import {MigrationInterface, QueryRunner} from "typeorm";

export class addDefaultValueToDates21628396058982 implements MigrationInterface {
    name = 'addDefaultValueToDates21628396058982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users_details\` CHANGE \`created_at\` \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users_details\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users\` CHANGE \`created_at\` \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`roles\` CHANGE \`created_at\` \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`roles\` CHANGE \`updated_at\` \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`roles\` CHANGE \`updated_at\` \`updated_at\` timestamp(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`roles\` CHANGE \`created_at\` \`created_at\` timestamp(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users\` CHANGE \`updated_at\` \`updated_at\` timestamp(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users\` CHANGE \`created_at\` \`created_at\` timestamp(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users_details\` CHANGE \`updated_at\` \`updated_at\` timestamp(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bookstore\`.\`users_details\` CHANGE \`created_at\` \`created_at\` timestamp(0) NOT NULL`);
    }

}
